/****************************************************************IMPORTS*/
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { ITrainer } from "../interfaces/interfaces.js"
import Trainer from '../models/trainer'
import jwt from 'jsonwebtoken'
/****************************************************************SIGN IN*/
export const signUp = (req: Request, res: Response): Response | void => {
    const name: string = req.body.name
    const password: string = req.body.password

    if (!name || !password) {
        return res.status(400).json({ message: `Il te faut un nom et un mot de passe !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom et un mot de passe ! Rien de plus !` })
            }
        }

        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` })
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` })
        }
        else {
            if (!/^([^\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ton nom doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` })
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Il te faut faut un mot de passe fort pour protéger tes données ! Il doit être composé d'au moins 8 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial comme '@' ou '#' !` })
            }
            else {
                bcrypt.hash(password, 10)

                    .then((hash: string): void => {
                        const trainer: ITrainer = new Trainer<ITrainer>({
                            name: name,
                            password: hash,
                            level: 1,
                            rank: "DÉBUTANT"
                        })
                        const trainerModel = new Trainer<ITrainer>(trainer)
                        trainerModel.save()

                            .then((): void => {
                                res.status(201).json({ message: `Bienvenue ${name.toUpperCase()} ! Tu peux maintenant te connecter à ta session !` })
                            })
                            .catch((error: Error): void => {
                                const message: string = `Ce nom est déjà utilisé par un autre dresseur !`
                                res.status(500).json({ message: message, error: error })
                            })
                    })
                    .catch((error: Error): void => {
                        const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                        res.status(500).json({ message: message, error: error })
                    })
            }
        }
    }
}
/******************************************************************LOGIN*/
export const login = (req: Request, res: Response): Response | void => {
    const name: string = req.body.name
    const password: string = req.body.password

    if (!name || !password) {
        return res.status(400).json({ message: `Tu dois te connecter avec un nom et un mot de passe !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Tu dois te connecter avec un nom et un mot de passe ! Rien de plus !` })
            }
        }

        if (name.length > 12) {
            return res.status(400).json({ message: `Ce dresseur n'existe pas !` })
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Le mot de passe est incorrect !` })
        }
        else {
            if (!/^([^\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ce dresseur n'existe pas !` })
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Le mot de passe est forcément incorrect car il ne correspond pas aux critères de sécurité du Pokedex !` })
            }
            else {
                Trainer.findOne({ name: name })

                    .then((trainer: ITrainer | null): void => {
                        if (trainer) {
                            bcrypt.compare(password, trainer.password)

                                .then((valid: boolean): void => {
                                    if (valid) {
                                        const message: string = `Bienvenue ${name.toUpperCase()} !`
                                        const tokenKey: string = process.env.TOKEN_KEY || 'token_key'
                                        const token = jwt.sign({ name: name.toUpperCase() }, tokenKey, { expiresIn: '1h' })

                                        res.cookie('token', token, {
                                            httpOnly: true,
                                            secure: true,
                                            sameSite: 'strict',
                                            path: '/',
                                            domain: process.env.COOKIE_DOMAIN,
                                            maxAge: 3600 * 1000
                                        })

                                        res.status(200).json({ message: message })
                                    }
                                    else {
                                        res.status(401).json({ message: `Le mot de passe est incorrect !` })
                                    }
                                })
                                .catch((error: Error): void => {
                                    const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                    res.status(500).json({ message: message, error: error })
                                })
                        }
                        else {
                            const message: string = `Ce dresseur n'existe pas !`
                            res.status(404).json({ error: message })
                        }
                    })
                    .catch((error: Error) => {
                        const message: string = `Ce dresseur n'existe pas !`
                        res.status(404).json({ message: message, error: error })
                    })
            }
        }
    }
}