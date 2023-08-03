"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.evolveOne = exports.catchOne = exports.seeOne = exports.seeAll = void 0;
const pokemon_1 = __importDefault(require("../models/pokemon"));
const pokemon_2 = require("../data/pokemon");
/****************************************************************GET ALL*/
const seeAll = (req, res) => {
    pokemon_1.default.find().select({ "__v": 0, "evolve": 0 })
        .then((pokemonList) => {
        let message = "";
        if (pokemonList.length === 0) {
            message = `Tu n'as attrapé aucun Pokemon ! Il est temps de commencer ton aventure !`;
        }
        else if (pokemonList.length === 151) {
            message = `Tu as attrapé tous les Pokemon ! Félicitations !`;
        }
        else {
            message = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`;
        }
        res.status(200).json({ message: message, pokedex: pokemonList });
    })
        .catch((error) => {
        const message = `Le Pokedex est en panne ! Reviens plus tard !`;
        res.status(500).json({ message: message, error: error });
    });
};
exports.seeAll = seeAll;
/****************************************************************GET ONE*/
const seeOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id }).select({ "__v": 0, "_id": 0, "evolve": 0 })
        .then((pokemon) => {
        if (pokemon !== null) {
            const message = `Ton ${pokemon.name} est très heureux !`;
            res.status(200).json({ message: message, pokemon: pokemon });
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json({ error: message });
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json({ message: message, error: error });
    });
};
exports.seeOne = seeOne;
/**************************************************************CATCH ONE*/
const catchOne = (req, res) => {
    let newPokemon = { number: 0, name: "", evolve: "", picture: "", description: "", type: [], trainers: [] };
    let i = 0;
    let index = pokemon_2.data[i];
    while (i < pokemon_2.data.length && index.name !== req.body.name) {
        i++;
        index = pokemon_2.data[i];
    }
    if (i === pokemon_2.data.length) {
        const message = `Ce Pokemon n'existe pas !`;
        res.status(400).json({ error: message });
    }
    else {
        newPokemon = index;
        const pokemonModel = new pokemon_1.default(newPokemon);
        pokemonModel.save()
            .then((index) => {
            const message = `Tu as capturé un ${index.name} !`;
            index.evolve = '???';
            res.status(201).json({ message: message, pokemon: index });
        })
            .catch((error) => {
            const message = `Tu possèdes déjà un ${index.name} !`;
            res.status(400).json({ message: message, error: error });
        });
    }
};
exports.catchOne = catchOne;
/*************************************************************UPDATE ONE*/
const evolveOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id })
        .then((pokemon) => {
        if (pokemon !== null) {
            let i = 0;
            let index = pokemon_2.data[i];
            while (i < pokemon_2.data.length && index.name !== pokemon.evolve) {
                i++;
                index = pokemon_2.data[i];
            }
            if (i === pokemon_2.data.length) {
                const message = `${pokemon.name} ne peut pas évoluer !`;
                res.status(400).json({ error: message });
            }
            else {
                pokemon_1.default.updateOne({ _id: req.params.id }, Object.assign({}, index))
                    .then(() => {
                    const message = `Ton ${pokemon.name} évolue en ${index.name} !`;
                    index.evolve = '???';
                    res.status(201).json({ message: message, evolution: index });
                })
                    .catch((error) => {
                    const message = `Echec du processus d'évolution !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json({ error: message });
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json({ message: message, error: error });
    });
};
exports.evolveOne = evolveOne;
/*************************************************************DELETE ONE*/
const deleteOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id })
        .then((pokemon) => {
        if (pokemon !== null) {
            pokemon_1.default.deleteOne({ _id: req.params.id })
                .then(() => {
                const message = `Tu as relâché ton ${pokemon.name} !`;
                res.status(200).json({ message: message });
            })
                .catch((error) => {
                const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                res.status(500).json({ message: message, error: error });
            });
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json({ error: message });
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json({ message: message, error: error });
    });
};
exports.deleteOne = deleteOne;
