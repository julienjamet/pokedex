/****************************************************************IMPORTS*/
import { Request, Response } from 'express'
import Pokemon from '../models/pokemon'
import IPokemon from "../interfaces/pokemon.js"
import { data } from '../data/pokemon'
/****************************************************************GET ALL*/
export const getAll = (req: Request, res: Response): void => {
    Pokemon.find()

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

            res.status(200).json({ message: message, data: pokemonList })
        })
        .catch((error: Error): void => {
            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`

            res.status(500).json({ message: message, error: error })
        })
}
/****************************************************************GET ONE*/
export const getOne = (req: Request, res: Response): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                const message: string = `Ton ${pokemon.name} est très heureux !`
                res.status(200).json({ message: message, data: pokemon })
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
export const catchOne = (req: Request, res: Response): Response | void => {
    const name: string = req.body.name

    if (!(name in data)) {
        const message: string = `Ce Pokemon n'existe pas !`
        return res.status(400).json({ error: message })
    }

    const pokemon: any = new Pokemon({ ...req.body })
    pokemon.picture = data[pokemon.name]

    pokemon.save()

        .then((pokemon: IPokemon): void => {
            const message: string = `Tu as capturé un ${pokemon.name} !`
            res.status(201).json({ message: message, data: pokemon })
        })
        .catch((error: Error): void => {
            const message: string = `Echec de la capture !`
            res.status(400).json({ message: message, error: error })
        })
}
/*************************************************************UPDATE ONE*/
export const updateOne = (req: Request, res: Response): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                Pokemon.updateOne({ _id: req.params.id }, { ...req.body })

                    .then((): void => {
                        const message: string = `Tu as modifié ton ${pokemon.name} !`
                        res.status(201).json({ message: message })
                    })
                    .catch((error: Error): void => {
                        const message: string = `Echec de la modification !`
                        res.status(400).json({ message: message, error: error })
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