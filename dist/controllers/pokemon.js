"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.catchOne = exports.getOne = exports.getAll = void 0;
/****************************************************************IMPORTS*/
const pokemon_1 = __importDefault(require("../models/pokemon"));
const helper_js_1 = require("../helper.js");
/****************************************************************GET ALL*/
const getAll = (req, res) => {
    pokemon_1.default.find()
        .then((pokemonList) => {
        const message = `Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`;
        res.status(200).json((0, helper_js_1.success)(message, pokemonList));
    })
        .catch((error) => {
        const message = `Le Pokedex est en panne ! Reviens plus tard !`;
        res.status(500).json((0, helper_js_1.success)(message, undefined, error));
    });
};
exports.getAll = getAll;
/****************************************************************GET ONE*/
const getOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id })
        .then((pokemon) => {
        if (pokemon !== null) {
            const message = `Ton ${pokemon.name} est très heureux !`;
            res.status(200).json((0, helper_js_1.success)(message, pokemon));
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json((0, helper_js_1.success)(message));
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json((0, helper_js_1.success)(message, undefined, error));
    });
};
exports.getOne = getOne;
/**************************************************************CATCH ONE*/
const catchOne = (req, res) => {
    const pokemon = new pokemon_1.default(Object.assign({}, req.body));
    pokemon.save()
        .then((pokemon) => {
        const message = `Tu as capturé un ${pokemon.name} !`;
        res.status(201).json((0, helper_js_1.success)(message, pokemon));
    })
        .catch((error) => {
        const message = `Echec de la capture !`;
        res.status(400).json((0, helper_js_1.success)(message, undefined, error));
    });
};
exports.catchOne = catchOne;
/*************************************************************UPDATE ONE*/
const updateOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id })
        .then((pokemon) => {
        if (pokemon !== null) {
            pokemon_1.default.updateOne({ _id: req.params.id }, Object.assign({}, req.body))
                .then(() => {
                const message = `Tu as modifié ton ${pokemon.name} !`;
                res.status(201).json((0, helper_js_1.success)(message));
            })
                .catch((error) => {
                const message = `Echec de la modification !`;
                res.status(400).json((0, helper_js_1.success)(message, undefined, error));
            });
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json((0, helper_js_1.success)(message));
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json((0, helper_js_1.success)(message, undefined, error));
    });
};
exports.updateOne = updateOne;
/*************************************************************DELETE ONE*/
const deleteOne = (req, res) => {
    pokemon_1.default.findById({ _id: req.params.id })
        .then((pokemon) => {
        if (pokemon !== null) {
            pokemon_1.default.deleteOne({ _id: req.params.id })
                .then(() => {
                const message = `Tu as relâché ton ${pokemon.name} !`;
                res.status(200).json((0, helper_js_1.success)(message));
            })
                .catch((error) => {
                const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                res.status(500).json((0, helper_js_1.success)(message, undefined, error));
            });
        }
        else {
            const message = `Ce Pokemon n'est pas présent dans ton Pokedex !`;
            res.status(404).json((0, helper_js_1.success)(message));
        }
    })
        .catch((error) => {
        const message = `Cet identifiant n'est pas valable !`;
        res.status(400).json((0, helper_js_1.success)(message, undefined, error));
    });
};
exports.deleteOne = deleteOne;
