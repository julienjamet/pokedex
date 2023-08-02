/****************************************************************IMPORTS*/
import Pokemon from '../models/pokemon'
import { success } from "../helper.js"
import IPokemon from "../interface.js"
/****************************************************************GET ALL*/
export const getAll: Function = (req: {}, res: { status: Function, json: Function }): void => {
    Pokemon.find()

        .then((pokemonList: IPokemon[]): void => {
            const message: string = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`
            res.status(200).json(success(message, pokemonList))
        })
        .catch((error: {}): void => {
            const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
            res.status(500).json(success(message, undefined, error))
        })
}
/****************************************************************GET ONE*/
export const getOne: Function = (req: { params: { id: string } }, res: { status: Function, json: Function }): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                const message: string = `Ton ${pokemon.name} est très heureux !`
                res.status(200).json(success(message, pokemon))
            }
            else {
                const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                res.status(404).json(success(message))
            }
        })
        .catch((error: {}): void => {
            const message: string = `Cet identifiant n'est pas valable !`
            res.status(400).json(success(message, undefined, error))
        })
}
/**************************************************************CATCH ONE*/
export const catchOne: Function = (req: { body: IPokemon }, res: { status: Function, json: Function }): void => {
    const pokemon: { save: Function } = new Pokemon({
        ...req.body
    })

    pokemon.save()

        .then((pokemon: IPokemon): void => {
            const message: string = `Tu as capturé un ${pokemon.name} !`
            res.status(201).json(success(message, pokemon))
        })
        .catch((error: {}): void => {
            const message: string = `Echec de la capture !`
            res.status(400).json(success(message, undefined, error))
        })
}
/*************************************************************UPDATE ONE*/
export const updateOne: Function = (req: { params: { id: string }, body: IPokemon }, res: { status: Function, json: Function }): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                Pokemon.updateOne({ _id: req.params.id }, { ...req.body })

                    .then((): void => {
                        const message: string = `Tu as modifié ton ${pokemon.name} !`
                        res.status(201).json(success(message))
                    })
                    .catch((error: {}): void => {
                        const message: string = `Echec de la modification !`
                        res.status(400).json(success(message, undefined, error))
                    })
            }
            else {
                const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                res.status(404).json(success(message))
            }
        })
        .catch((error: {}): void => {
            const message: string = `Cet identifiant n'est pas valable !`
            res.status(400).json(success(message, undefined, error))
        })
}
/*************************************************************DELETE ONE*/
export const deleteOne: Function = (req: { params: { id: string }, body: IPokemon }, res: { status: Function, json: Function }): void => {
    Pokemon.findById({ _id: req.params.id })

        .then((pokemon: IPokemon | null): void => {
            if (pokemon !== null) {
                Pokemon.deleteOne({ _id: req.params.id })

                    .then((): void => {
                        const message: string = `Tu as relâché ton ${pokemon.name} !`
                        res.status(200).json(success(message))
                    })
                    .catch((error: {}): void => {
                        const message: string = `Le Pokedex est en panne ! Reviens plus tard !`
                        res.status(500).json(success(message, undefined, error))
                    })
            }
            else {
                const message: string = `Ce Pokemon n'est pas présent dans ton Pokedex !`
                res.status(404).json(success(message))
            }
        })
        .catch((error: {}): void => {
            const message: string = `Cet identifiant n'est pas valable !`
            res.status(400).json(success(message, undefined, error))
        })
}