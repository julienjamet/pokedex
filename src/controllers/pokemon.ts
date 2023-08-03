/****************************************************************IMPORTS*/
import { Request, Response } from 'express'
import Pokemon from '../models/pokemon'
import IPokemon from "../interfaces/pokemon.js"
import { data } from '../data/pokemon'
/****************************************************************GET ALL*/
export const seeAll = (req: Request, res: Response): void => {
    Pokemon.find().select({ "__v": 0, "evolve": 0 })

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
/****************************************************************GET ONE*/
export const seeOne = (req: Request, res: Response): void => {
    Pokemon.findById({ _id: req.params.id }).select({ "__v": 0, "_id": 0, "evolve": 0 })

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
/**************************************************************CATCH ONE*/
export const catchOne = (req: Request, res: Response): void => {
    let newPokemon: IPokemon = { number: 0, name: "", evolve: "", picture: "", description: "", type: [] }
    let i: number = 0
    let index: IPokemon = data[i]

    while (i < data.length && index.name !== req.body.name) {
        i++
        index = data[i]
    }

    if (i === data.length) {
        const message: string = `Ce Pokemon n'existe pas !`
        res.status(400).json({ error: message })
    }
    else {
        newPokemon = index
        const pokemonModel = new Pokemon(newPokemon)
        pokemonModel.save()

            .then((index: IPokemon): void => {
                const message: string = `Tu as capturé un ${index.name} !`
                index.evolve = '???'
                res.status(201).json({ message: message, pokemon: index })
            })
            .catch((error: Error): void => {
                const message: string = `Tu possèdes déjà un ${index.name} !`
                res.status(400).json({ message: message, error: error })
            })
    }
}
/*************************************************************UPDATE ONE*/
export const evolveOne = (req: Request, res: Response): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                let i: number = 0
                let index: IPokemon = data[i]

                while (i < data.length && index.name !== pokemon.evolve) {
                    i++
                    index = data[i]
                }

                if (i === data.length) {
                    const message: string = `${pokemon.name} ne peut pas évoluer !`
                    res.status(400).json({ error: message })
                }
                else {
                    Pokemon.updateOne({ _id: req.params.id }, { ...index })

                        .then((): void => {
                            const message: string = `Ton ${pokemon.name} évolue en ${index.name} !`
                            index.evolve = '???'
                            res.status(201).json({ message: message, evolution: index })
                        })
                        .catch((error: Error): void => {
                            const message: string = `Echec du processus d'évolution !`
                            res.status(500).json({ message: message, error: error })
                        })
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
/*************************************************************DELETE ONE*/
export const deleteOne = (req: Request, res: Response): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                Pokemon.deleteOne({ _id: req.params.id })

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
                const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                res.status(404).json({ error: message })
            }
        })
        .catch((error: Error): void => {
            const message: string = `Cet identifiant n'est pas valable !`
            res.status(400).json({ message: message, error: error })
        })
}