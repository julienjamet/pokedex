const express: Function = require('express')
const helper = require('./helper.js')
import { IPokemon, pokemonList } from "./mock-pokemon.js"

const app: { get: Function, listen: Function } = express()
const port: number = 3002

app.get('/api/pokemon', (req: {}, res: { send: Function }): void => res.send({ Chen: `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !` }))

app.get('/api/pokemon/:id', (req: { params: { id: string } }, res: { json: Function }): void => {
    const id: number = Number(req.params.id)
    const selectPokemon: IPokemon | undefined = pokemonList.find((pokemon: { id: number }) => pokemon.id === id)
    res.json(helper.success(selectPokemon))
})

app.listen(port, () => console.log(`Ecoute sur le port ${port}`))