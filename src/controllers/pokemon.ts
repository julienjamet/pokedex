/****************************************************************IMPORTS*/
import { RequestHandler, Response } from 'express'
import Pokemon from '../models/pokemon'
import Trainer from '../models/trainer'
import { IPokemon, ITrainer, authRequest } from "../interfaces/interfaces.js"
/****************************************************************GET ALL*/
export const seeAll: RequestHandler = (req: authRequest, res: Response): Response | void => {
    if (req.auth !== undefined) {
        const name: string = req.auth.name
        let filters: { trainers: string, type?: string | undefined } = {
            trainers: name
        }
        const types: string[] = ['Feu', 'Eau', 'Plante', 'Normal', 'Vol', 'Insecte', 'Electrik', 'Fée', 'Dragon', 'Poison', 'Combat', 'Glace', 'Psy', 'Roche', 'Sol']

        if (req.query.type) {
            const query: string = req.query.type as string
            let typeValidator: boolean = false

            for (let each of types) {
                if (query === each) {
                    typeValidator = true
                }
            }

            if (typeValidator) {
                filters.type = query
            }
            else {
                return res.status(400).json({ message: `Ce type n'existe pas !` })
            }
        }

        Pokemon.find(filters).select({ "__v": 0, "evolve": 0, "trainers": 0, "level": 0 }).sort({ number: 1 })

            .then((pokedex: IPokemon[]): void => {
                Trainer.findOne({ name: name })

                    .then((trainer: ITrainer | null) => {
                        if (trainer !== null) {
                            let message: string

                            if (req.query.type) {
                                message = `Salut ${name.toUpperCase()} ! Tu as attrapé ${pokedex.length} Pokemon de type ${filters.type?.toUpperCase()} !`
                                return res.status(200).json({ message: message, pokedex: pokedex })
                            }
                            else {
                                const rank: string = trainer.rank
                                let forNextRank: number
                                let messageRank: string

                                if (rank === "DÉBUTANT") {
                                    forNextRank = 43 - pokedex.length
                                }
                                else if (rank === "COLLECTIONNEUR") {
                                    forNextRank = 115 - pokedex.length
                                }
                                else if (rank === "CHASSEUR") {
                                    forNextRank = 146 - pokedex.length
                                }
                                else if (rank === "CHAMPION") {
                                    forNextRank = 150 - pokedex.length
                                }
                                else if (rank === "MAÎTRE DRESSEUR") {
                                    forNextRank = 1
                                }
                                else {
                                    forNextRank = 0
                                }

                                messageRank = `Il te manque ${forNextRank} Pokemon pour accéder au niveau supérieur !`

                                if (pokedex.length === 0) {
                                    message = `Salut ${name.toUpperCase()} ! Tu n'as attrapé aucun Pokemon ! Il est temps de commencer ton aventure !`
                                }
                                else if (pokedex.length === 151) {
                                    message = `Salut ${name.toUpperCase()} ! Tu as attrapé tous les Pokemon ! Félicitations !`
                                    return res.status(200).json({ message: message, rank: rank, pokedex: pokedex })
                                }
                                else if (pokedex.length >= 100) {
                                    message = `Salut ${name.toUpperCase()} ! Tu as déjà attrapé ${pokedex.length} Pokemon ! Tu y es presque !`
                                }
                                else {
                                    message = `Salut ${name.toUpperCase()} ! Tu as déjà attrapé ${pokedex.length} Pokemon ! Continue comme ça !`
                                }

                                res.status(200).json({ message: message, rank: rank, forNextRank: messageRank, pokedex: pokedex })
                            }
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
export const seeOne: RequestHandler = (req: authRequest, res: Response): void => {
    if (req.auth !== undefined) {
        const id: string = req.params.id
        const name: string = req.auth.name

        Pokemon.findOne({ _id: id, trainers: { $in: name } }).select({ "__v": 0, "_id": 0, "evolve": 0, "trainers": 0, "level": 0 })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    const message: string = `Ton ${pokemon.name.toUpperCase()} est très heureux !`
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
export const catchOne: RequestHandler = (req: authRequest, res: Response): Response | void => {
    const pokemonName: string = req.body.name

    if (!pokemonName) {
        return res.status(400).json({ message: `Tu dois renseigner le nom ('name') du Pokemon à capturer !` })
    }
    else {
        for (let key in req.body) {
            if (key !== 'name') {
                return res.status(400).json({ message: `Il faut renseigner le nom ('name') du Pokemon à capturer ! Rien de plus !` })
            }
        }

        if (pokemonName.length > 15) {
            return res.status(400).json({ message: `Aucun Pokemon n'a un nom aussi long !` })
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(pokemonName)) {
                return res.status(400).json({ message: `Le nom du Pokemon doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` })
            }
            else {
                Pokemon.findOne({ name: pokemonName }).lean()

                    .then((pokemon: IPokemon | null): void => {
                        if (pokemon !== null) {
                            if (req.auth !== undefined) {
                                const trainerName: string = req.auth.name

                                if (!pokemon.trainers.includes(trainerName)) {
                                    Trainer.findOne({ name: trainerName })

                                        .then((trainer: ITrainer | null): void => {
                                            if (trainer !== null) {
                                                if (pokemon.level <= trainer.level) {
                                                    Pokemon.updateOne({ name: pokemonName }, { $push: { trainers: trainerName } })

                                                        .then((): void => {
                                                            const message: string = `Bravo ${trainerName.toUpperCase()} ! Tu as attrapé un ${pokemonName.toUpperCase()} !`
                                                            const { _id, evolve, __v, trainers, level, ...filteredPokemon } = pokemon
                                                            res.status(201).json({ message: message, pokemon: filteredPokemon })
                                                        })
                                                        .catch((error: Error): void => {
                                                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                                            res.status(500).json({ message: message, error: error })
                                                        })
                                                }
                                                else {
                                                    const message: string = `Tu n'es pas encore assez expérimenté(e) pour attraper un ${pokemonName.toUpperCase()} ! Entraîne-toi sur des Pokemon moins puissants !`
                                                    res.status(403).json({ message: message })
                                                }
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
                                else {
                                    const message: string = `Tu possèdes déjà un ${pokemonName.toUpperCase()} !`
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
export const evolveOne: RequestHandler = (req: authRequest, res: Response): Response | void => {
    const id: string = req.params.id

    if (req.body && Object.keys(req.body).length !== 0) {
        return res.status(400).json({ message: `Il n'y a rien à envoyer ici !` })
    }

    if (req.auth !== undefined) {
        const trainerName = req.auth.name

        Pokemon.findOne({ _id: id, trainers: { $in: trainerName } })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    const pokemonName: string = pokemon.name

                    if (pokemon.evolve) {
                        Pokemon.findOne({ name: pokemon.evolve }).lean()

                            .then((evolution: IPokemon | null): void => {
                                if (evolution !== null) {
                                    const evolutionName: string = evolution.name

                                    if (!evolution.trainers.includes(trainerName)) {
                                        Trainer.findOne({ name: trainerName })

                                            .then((trainer: ITrainer | null) => {
                                                if (trainer !== null) {
                                                    if (evolution.level <= trainer.level) {
                                                        Pokemon.updateOne({ name: pokemonName }, { $pull: { trainers: trainerName } })

                                                            .then((): void => {
                                                                Pokemon.updateOne({ name: evolutionName }, { $push: { trainers: trainerName } })

                                                                    .then((): void => {
                                                                        const message: string = `Bravo ${trainerName.toUpperCase()} ! Ton ${pokemonName.toUpperCase()} évolue en ${evolutionName.toUpperCase()} !`
                                                                        const { _id, evolve, __v, trainers, level, ...filteredEvolution } = evolution
                                                                        res.status(200).json({ message: message, pokemon: filteredEvolution })
                                                                    })
                                                                    .catch((error: Error): void => {
                                                                        const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                                                        res.status(500).json({ message: message, error: error })
                                                                    })
                                                            })
                                                            .catch((error: Error): void => {
                                                                const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                                                                res.status(500).json({ message: message, error: error })
                                                            })
                                                    }
                                                    else {
                                                        const message: string = `Tu n'es pas encore assez expérimenté(e) pour faire évoluer ton ${pokemonName.toUpperCase()} ! Entraîne-toi sur des Pokemon moins puissants !`
                                                        res.status(403).json({ message: message })
                                                    }

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
                                    else {
                                        const message: string = `Tu possèdes déjà un ${evolutionName.toUpperCase()} ! ${pokemonName} n'évolue pas !`
                                        res.status(403).json({ message: message })
                                    }
                                }
                                else {
                                    const message: string = `${pokemonName.toUpperCase()} ne peut pas évoluer !`
                                    res.status(400).json({ message: message })
                                }
                            })
                            .catch((error: Error): void => {
                                const message: string = `${pokemonName.toUpperCase()} ne peut pas évoluer !`
                                res.status(400).json({ message: message, error: error })
                            })
                    }
                    else {
                        const message: string = `${pokemonName.toUpperCase()} ne peut pas évoluer !`
                        res.status(400).json({ message: message })
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
export const deleteOne: RequestHandler = (req: authRequest, res: Response): void => {
    const id: string = req.params.id

    if (req.auth !== undefined) {
        const trainerName: string = req.auth.name

        Pokemon.findOne({ _id: id, trainers: { $in: trainerName } })

            .then((pokemon: IPokemon | null): void => {
                if (pokemon !== null) {
                    const pokemonName: string = pokemon.name

                    Pokemon.updateOne({ name: pokemonName }, { $pull: { trainers: trainerName } })

                        .then((): void => {
                            const message: string = `Tu as relâché ton ${pokemonName.toUpperCase()} !`
                            res.status(200).json({ message: message })
                        })
                        .catch((error: Error): void => {
                            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                            res.status(500).json({ message: message, error: error })
                        })
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