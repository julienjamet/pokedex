"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const helper = require('./helper.js');
const mock_pokemon_js_1 = require("./mock-pokemon.js");
const app = express();
const port = 3002;
app.get('/api/pokemon', (req, res) => res.send({ Chen: `Tu as déjà attrapé ${mock_pokemon_js_1.pokemonList.length} Pokemon ! Continue comme ça !` }));
app.get('/api/pokemon/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectPokemon = mock_pokemon_js_1.pokemonList.find((pokemon) => pokemon.id === id);
    res.json(helper.success(selectPokemon));
});
app.listen(port, () => console.log(`Ecoute sur le port ${port}`));
