/****************************************************************IMPORTS*/
import { Response } from 'express'
import Pokemon from '../models/pokemon'
import { IPokemon, authRequest } from "../interfaces/interfaces.js"
/****************************************************************GET ALL*/
export const seeAll = (req: authRequest, res: Response): void => {
    if (req.auth !== undefined) {
        Pokemon.find({ trainers: req.auth.name }).select({ "__v": 0, "evolve": 0, "trainers": 0 })

            .then((pokemonList: IPokemon[]): void => {
                let message: string = ""

                if (pokemonList.length === 0) {
                    message = `Tu n'as attrapé aucun Pokemon ! Il est temps de commencer ton aventure !`
                }
                else if (pokemonList.length === 151) {
                    message = `Tu as attrapé tous les Pokemon ! Félicitations !`
                }
                else {
                    message = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`
                }

                res.status(200).json({ message: message, pokedex: pokemonList })
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
/****************************************************************GET ONE*/
export const seeOne = (req: authRequest, res: Response): void => {
    if (req.auth !== undefined) {
        Pokemon.findOne({ _id: req.params.id, trainers: { $in: req.auth.name } }).select({ "__v": 0, "_id": 0, "evolve": 0, "trainers": 0 })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    const message: string = `Ton ${pokemon.name} est très heureux !`
                    res.status(200).json({ message: message, pokemon: pokemon })
                }
                else {
                    const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                    res.status(404).json({ error: message })
                }
            })
            .catch((error: Error): void => {
                const message: string = `Cet identifiant n'est pas valable !`
                res.status(400).json({ message: message, error: error })
            })
    }
    else {
        const message: string = `Tu n'es pas authentifié(e) !`
        res.status(401).json({ message: message })
    }
}
/**************************************************************CATCH ONE*/
export const catchOne = (req: authRequest, res: Response): Response | void => {
    const name: string = req.body.name

    if (!name) {
        return res.status(400).json({ message: `Tu dois renseigner le nom ('name') du Pokemon à capturer !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name') {
                return res.status(400).json({ message: `Il faut renseigner le nom ('name') du Pokemon à capturer ! Rien de plus !` })
            }
        }

        if (name.length > 15) {
            return res.status(400).json({ message: `Aucun Pokemon n'a un nom aussi long !` })
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Le nom du Pokemon doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` })
            }
            else {
                Pokemon.findOne({ name: req.body.name }).lean()

                    .then((pokemon: IPokemon | null): void => {
                        if (pokemon !== null) {
                            if (req.auth !== undefined) {
                                if (!pokemon.trainers.includes(req.auth.name)) {
                                    Pokemon.updateOne({ name: pokemon.name }, { $push: { trainers: req.auth.name } })

                                        .then((): void => {
                                            const message: string = `Tu as capturé un ${pokemon.name} !`
                                            const { _id, evolve, __v, trainers, ...filteredPokemon } = pokemon
                                            res.status(201).json({ message: message, pokemon: filteredPokemon })
                                        })
                                        .catch((error: Error): void => {
                                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                            res.status(500).json({ message: message, error: error })
                                        })
                                }
                                else {
                                    const message: string = `Tu possèdes déjà un ${pokemon.name} !`
                                    res.status(403).json({ message: message })
                                }
                            }
                            else {
                                const message: string = `Tu n'es pas authentifié(e) !`
                                res.status(401).json({ message: message })
                            }
                        }
                        else {
                            const message: string = `Ce Pokemon n'existe pas !`
                            res.status(404).json({ message: message })
                        }
                    })
                    .catch((error: Error): void => {
                        const message: string = `Ce Pokemon n'existe pas !`
                        res.status(404).json({ message: message, error: error })
                    })
            }
        }
    }
}
/*************************************************************UPDATE ONE*/
export const evolveOne = (req: authRequest, res: Response): Response | void => {
    if (req.body && Object.keys(req.body).length !== 0) {
        return res.status(400).json({ message: `Il n'y a rien à envoyer ici !` })
    }

    if (req.auth !== undefined) {
        Pokemon.findOne({ _id: req.params.id, trainers: { $in: req.auth.name } })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    if (req.auth !== undefined) {
                        if (pokemon.evolve) {
                            Pokemon.updateOne({ name: pokemon.name }, { $pull: { trainers: req.auth.name } })

                                .then((): void => {
                                    Pokemon.findOne({ name: pokemon.evolve })

                                        .then((evolution: IPokemon | null): void => {
                                            if (evolution !== null) {
                                                if (req.auth !== undefined) {
                                                    Pokemon.updateOne({ name: evolution.name }, { $push: { trainers: req.auth.name } })

                                                        .then((): void => {
                                                            const message: string = `Ton ${pokemon.name} évolue en ${evolution.name} !`
                                                            res.status(200).json({ message: message })
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
                                            else {
                                                const message: string = `${pokemon.name} ne peut pas évoluer !`
                                                res.status(400).json({ message: message })
                                            }
                                        })
                                        .catch((error: Error): void => {
                                            const message: string = `${pokemon.name} ne peut pas évoluer !`
                                            res.status(400).json({ message: message, error: error })
                                        })
                                })
                                .catch((error: Error): void => {
                                    const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                    res.status(500).json({ message: message, error: error })
                                })
                        }
                        else {
                            const message: string = `${pokemon.name} ne peut pas évoluer !`
                            res.status(400).json({ message: message })
                        }
                    }
                    else {
                        const message: string = `Tu n'es pas authentifié(e) !`
                        res.status(401).json({ message: message })
                    }
                }
                else {
                    const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                    res.status(404).json({ error: message })
                }
            })
            .catch((error: Error): void => {
                const message: string = `Cet identifiant n'est pas valable !`
                res.status(400).json({ message: message, error: error })
            })
    }
    else {
        const message: string = `Tu n'es pas authentifié(e) !`
        res.status(401).json({ message: message })
    }
}
/*************************************************************DELETE ONE*/
export const deleteOne = (req: authRequest, res: Response): void => {
    if (req.auth !== undefined) {
        Pokemon.findOne({ _id: req.params.id, trainers: { $in: req.auth.name } })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    if (req.auth !== undefined) {
                        Pokemon.updateOne({ name: pokemon.name }, { $pull: { trainers: req.auth.name } })

                            .then((): void => {
                                const message: string = `Tu as relâché ton ${pokemon.name} !`
                                res.status(200).json({ message: message })
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
                else {
                    const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                    res.status(404).json({ error: message })
                }
            })
            .catch((error: Error): void => {
                const message: string = `Cet identifiant n'est pas valable !`
                res.status(400).json({ message: message, error: error })
            })
    }
    else {
        const message: string = `Tu n'es pas authentifié(e) !`
        res.status(401).json({ message: message })
    }
}