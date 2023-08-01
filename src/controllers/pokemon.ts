/****************************************************************IMPORTS*/
import Pokemon from '../models/pokemon'
import { success } from "../helper.js"
import IPokemon from "../interface.js"
/****************************************************************GET ALL*/
export const getAll: Function = (req: {}, res: { status: Function, json: Function }): void => {
    Pokemon.find()

        .then((pokemonList: IPokemon[]) => {
            const message: string = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`
            res.status(200).json(success(message, pokemonList))
        })
        .catch((error: string) => res.status(500).json({ error }))
}
/****************************************************************GET ONE*/
export const getOne: Function = (req: { params: { id: string } }, res: { status: Function, json: Function }): void => {
    Pokemon.findOne({ _id: req.params.id })

        .then((pokemon: IPokemon | null) => {
            if (pokemon !== null) {
                const message: string = `Ton ${pokemon.name} est très heureux !`
                res.status(200).json(success(message, pokemon))
            }
            else {
                res.status(404).json({ message: `Oups ! Ton Pokemon a disparu ! Reviens plus tard !` })
            }
        })
        .catch((error: string) => res.status(500).json({ error }))
}
/**************************************************************CATCH ONE*/
export const catchOne: Function = (req: { body: IPokemon }, res: { status: Function, json: Function }): void => {
    const pokemon: { save: Function } = new Pokemon({
        ...req.body
    })

    pokemon.save()

        .then((pokemon: IPokemon) => {
            const message: string = `Tu as capturé un ${pokemon.name} !`
            res.status(201).json(success(message, pokemon))
        })
        .catch((error: string) => res.status(500).json({ error }))
}
/*************************************************************UPDATE ONE*/
export const updateOne: Function = (req: { params: { id: string }, body: IPokemon }, res: { status: Function, json: Function }): void => {
    Pokemon.findOne({ _id: req.params.id })

        .then((pokemon: IPokemon | null) => {
            if (pokemon !== null) {
                Pokemon.updateOne({ _id: req.params.id }, { ...req.body })

                    .then(() => {
                        const message: string = `Tu as modifié ton ${pokemon.name} !`
                        res.status(200).json(success(message, pokemon))
                    })
                    .catch((error: string) => res.status(500).json({ error }))
            }
            else {
                res.status(404).json({ message: `Oups ! Ton Pokemon a disparu ! Reviens plus tard !` })
            }
        })
        .catch((error: string) => res.status(500).json({ error }))
}
/*************************************************************DELETE ONE*/
export const deleteOne: Function = (req: { params: { id: string }, body: IPokemon }, res: { status: Function, json: Function }): void => {
    Pokemon.findOne({ _id: req.params.id })

        .then((pokemon: IPokemon | null) => {
            if (pokemon !== null) {
                Pokemon.deleteOne({ _id: req.params.id })

                    .then(() => {
                        const message: string = `Tu as relâché ton ${pokemon.name} !`
                        res.status(200).json(success(message, pokemon))
                    })
                    .catch((error: string) => res.status(500).json({ error }))
            }
            else {
                res.status(404).json({ message: `Oups ! Ton Pokemon a disparu ! Reviens plus tard !` })
            }
        })
        .catch((error: string) => res.status(500).json({ error }))
}