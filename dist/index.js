"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const helper_js_1 = require("./helper.js");
const mock_pokemon_js_1 = require("./mock-pokemon.js");
/********************************************************************APP*/
const app = express();
const port = 3000;
mongoose.connect(process.env.DATABASE_CREDENTIALS, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection à MongoDB établie !'))
    .catch(() => console.log('Connection à MongoDB échouée !'));
/************************************************************MIDDLEWARES*/
app.use(favicon(__dirname + '/favicon.ico'));
app.use(morgan("dev"));
app.use(bodyParser.json());
/********************************************************************GET*/
app.get('/api/pokemon', (req, res) => {
    const message = `Tu as déjà attrapé ${mock_pokemon_js_1.pokemonList.length} Pokemon ! Continue comme ça !`;
    res.json((0, helper_js_1.success)(message, mock_pokemon_js_1.pokemonList));
});
app.get('/api/pokemon/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectPokemon = mock_pokemon_js_1.pokemonList.find((pokemon) => pokemon.id === id);
    const message = "Un Pokemon a été trouvé !";
    res.json((0, helper_js_1.success)(message, selectPokemon));
});
/*******************************************************************POST*/
app.post('/api/pokemon', (req, res) => {
    const id = mock_pokemon_js_1.pokemonList.length + 1;
    const newPokemon = Object.assign({ id: id }, req.body);
    mock_pokemon_js_1.pokemonList.push(newPokemon);
    const message = `Tu as attrapé un ${newPokemon.name} !`;
    res.json((0, helper_js_1.success)(message, newPokemon));
});
/********************************************************************PUT*/
app.put('/api/pokemon/:id', (req, res) => {
    const id = Number(req.params.id);
    const pokemonToUpdate = Object.assign({ id: id }, req.body);
    const indexToUpdate = mock_pokemon_js_1.pokemonList.findIndex(pokemon => pokemon.id === id);
    if (indexToUpdate !== -1) {
        mock_pokemon_js_1.pokemonList[indexToUpdate] = pokemonToUpdate;
        const message = `Tu as modifié ${pokemonToUpdate.name} !`;
        res.json((0, helper_js_1.success)(message, pokemonToUpdate));
    }
    else {
        const message = "Tu ne possèdes pas ce Pokemon !";
        res.json((0, helper_js_1.success)(message));
    }
    const message = `Vous avez modifié ${pokemonToUpdate.name} !`;
    res.json((0, helper_js_1.success)(message, pokemonToUpdate));
});
/*****************************************************************DELETE*/
app.delete('/api/pokemon/:id', (req, res) => {
    const id = Number(req.params.id);
    const indexToDelete = mock_pokemon_js_1.pokemonList.findIndex(pokemon => pokemon.id === id);
    if (indexToDelete !== -1) {
        const message = `Tu as relâché ${mock_pokemon_js_1.pokemonList[indexToDelete].name} !`;
        mock_pokemon_js_1.pokemonList.splice(indexToDelete, 1);
        res.json((0, helper_js_1.success)(message));
    }
    else {
        const message = "Tu ne possèdes pas ce Pokemon !";
        res.json((0, helper_js_1.success)(message));
    }
});
/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`));
