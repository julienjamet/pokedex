/****************************************************************IMPORTS*/
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Trainer from '../models/trainer'
import { ITrainer } from "../interfaces/interfaces.js"
/****************************************************************SIGN IN*/
export const signUp = (req: Request, res: Response): Response | void => {
    const name: string = req.body.name
    const password: string = req.body.password

    if (!name || !password) {
        return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') ! Rien de plus !` })
            }
        }

        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` })
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` })
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
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
                            password: hash
                        })
                        const trainerModel = new Trainer<ITrainer>(trainer)
                        trainerModel.save()

                            .then((): void => {
                                res.status(201).json({ message: `Bienvenue ${name} ! Tu peux maintenant te connecter à ta session !` })
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
        return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') ! Rien de plus !` })
            }
        }

        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` })
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` })
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ton nom doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` })
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Il te faut faut un mot de passe fort pour protéger tes données ! Il doit être composé d'au moins 8 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial comme '@' ou '#' !` })
            }
            else {
                Trainer.findOne({ name: name })

                    .then((trainer: ITrainer | null): void => {
                        if (trainer !== null) {
                            bcrypt.compare(password, trainer.password)

                                .then((valid: boolean): void => {
                                    if (!valid) {
                                        res.status(401).json({ message: `Le mot de passe est incorrect !` })
                                    }
                                    else {
                                        const message: string = `Bienvenue ${name} !`
                                        const tokenKey: string = process.env.TOKEN_KEY || 'token_key'
                                        const token = jwt.sign({ name: name }, tokenKey, { expiresIn: '1h' })

                                        res.status(200).json({ message: message, token: token })
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