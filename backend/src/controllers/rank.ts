/****************************************************************IMPORTS*/
import { RequestHandler, Response, NextFunction } from 'express'
import { authRequest } from '../interfaces/interfaces'
import Pokemon from '../models/pokemon'
import Trainer from '../models/trainer'
/*******************************************************************AUTH*/
export const rank: RequestHandler = (req: authRequest, res: Response, next: NextFunction): Response | void => {
    if (req.auth !== undefined) {
        const name: string = req.auth.name

        Pokemon.find({ trainers: name }).countDocuments()

            .then((numberOfPokemon: number): void => {
                if (numberOfPokemon === 151) {
                    Trainer.updateOne({ name: name }, { $set: { level: 6, rank: "LÉGENDE" } })

                        .then((): void => {
                            next()
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
                }
                else if (numberOfPokemon === 150) {
                    Trainer.updateOne({ name: name }, { $set: { level: 5, rank: "MAÎTRE DRESSEUR" } })

                        .then((): void => {
                            next()
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
                }
                else if (numberOfPokemon >= 146) {
                    Trainer.updateOne({ name: name }, { $set: { level: 4, rank: "CHAMPION" } })

                        .then((): void => {
                            next()
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
                }
                else if (numberOfPokemon >= 115) {
                    Trainer.updateOne({ name: name }, { $set: { level: 3, rank: "CHASSEUR" } })

                        .then((): void => {
                            next()
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
                }
                else if (numberOfPokemon >= 43) {
                    Trainer.updateOne({ name: name }, { $set: { level: 2, rank: "COLLECTIONNEUR" } })

                        .then((): void => {
                            next()
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
                }
                else {
                    next()
                }
            })
            .catch((error: Error): void => {
                const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                res.status(500).json({ message: message, error: error })
            })
    }
    else {
        const message: string = `Tu n'es pas authentifié(e) !`
        res.status(401).json({ message: message })
    }
}