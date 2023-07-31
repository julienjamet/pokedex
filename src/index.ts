/****************************************************************IMPORTS*/
const express: Function = require('express')
const morgan: Function = require('morgan')
const favicon: Function = require('serve-favicon')
const bodyParser: { json: Function } = require('body-parser')

import { success } from "./helper.js"
import { pokemonList } from "./mock-pokemon.js"
import { IApp, IPokemon } from "./interface.js"



/********************************************************************APP*/
const app: IApp = express()
const port: number = 3000



/************************************************************MIDDLEWARES*/
app.use(favicon(__dirname + '/favicon.ico'))
app.use(morgan("dev"))
app.use(bodyParser.json())



/********************************************************************GET*/
app.get('/api/pokemon', (req: {}, res: { json: Function }): void => {
    const message: string = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`
    res.json(success(message, pokemonList))
})

app.get('/api/pokemon/:id', (req: { params: { id: string } }, res: { json: Function }): void => {
    const id: number = Number(req.params.id)
    const selectPokemon: IPokemon | undefined = pokemonList.find((pokemon: { id: number }) => pokemon.id === id)

    const message: string = "Un Pokemon a été trouvé !"
    res.json(success(message, selectPokemon))
})



/*******************************************************************POST*/
app.post('/api/pokemon', (req: { body: IPokemon }, res: { json: Function }): void => {
    const id: number = pokemonList.length + 1
    const newPokemon: IPokemon = { ...{ id: id }, ...req.body }
    pokemonList.push(newPokemon)

    const message: string = `Tu as attrapé un ${newPokemon.name} !`
    res.json(success(message, newPokemon))
})



/********************************************************************PUT*/
app.put('/api/pokemon/:id', (req: { params: { id: string }, body: IPokemon }, res: { json: Function }): void => {
    const id: number = Number(req.params.id)
    const pokemonToUpdate: IPokemon = { ...{ id: id }, ...req.body }
    const indexToUpdate: number = pokemonList.findIndex(pokemon => pokemon.id === id)

    if (indexToUpdate !== -1) {
        pokemonList[indexToUpdate] = pokemonToUpdate

        const message: string = `Tu as modifié ${pokemonToUpdate.name} !`
        res.json(success(message, pokemonToUpdate))
    }
    else {
        const message: string = "Tu ne possèdes pas ce Pokemon !"
        res.json(success(message))
    }

    const message: string = `Vous avez modifié ${pokemonToUpdate.name} !`
    res.json(success(message, pokemonToUpdate))
})



/*****************************************************************DELETE*/
app.delete('/api/pokemon/:id', (req: { params: { id: string } }, res: { json: Function }) => {
    const id: number = Number(req.params.id)
    const indexToDelete: number = pokemonList.findIndex(pokemon => pokemon.id === id)

    if (indexToDelete !== -1) {
        const message: string = `Tu as relâché ${pokemonList[indexToDelete].name} !`
        pokemonList.splice(indexToDelete, 1)

        res.json(success(message))
    }
    else {
        const message: string = "Tu ne possèdes pas ce Pokemon !"
        res.json(success(message))
    }
})



/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`))