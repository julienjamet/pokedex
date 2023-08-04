"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.evolveOne = exports.catchOne = exports.seeOne = exports.seeAll = void 0;
const pokemon_1 = __importDefault(require("../models/pokemon"));
/****************************************************************GET ALL*/
const seeAll = (req, res) => {
    if (req.auth !== undefined) {
        const name = req.auth.name;
        pokemon_1.default.find({ trainers: name }).select({ "__v": 0, "evolve": 0, "trainers": 0 }).sort({ number: 1 })
            .then((pokemonList) => {
            let message = "";
            if (pokemonList.length === 0) {
                message = `Salut ${name.toUpperCase()} ! Tu n'as attrapé aucun Pokemon ! Il est temps de commencer ton aventure !`;
            }
            else if (pokemonList.length === 151) {
                message = `Salut ${name.toUpperCase()} ! Tu as attrapé tous les Pokemon ! Félicitations !`;
            }
            else {
                message = `Salut ${name.toUpperCase()} ! Tu as déjà attrapé ${pokemonList.length} Pokemon ! Continue comme ça !`;
            }
            res.status(200).json({ message: message, pokedex: pokemonList });
        })
            .catch((error) => {
            const message = `Le Pokedex est en panne ! Reviens plus tard !`;
            res.status(500).json({ message: message, error: error });
        });
    }
    else {
        const message = `Tu n'es pas authentifié(e) !`;
        res.status(401).json({ message: message });
    }
};
exports.seeAll = seeAll;
/****************************************************************GET ONE*/
const seeOne = (req, res) => {
    if (req.auth !== undefined) {
        const id = req.params.id;
        const name = req.auth.name;
        pokemon_1.default.findOne({ _id: id, trainers: { $in: name } }).select({ "__v": 0, "_id": 0, "evolve": 0, "trainers": 0 })
            .then((pokemon) => {
            if (pokemon !== null) {
                const message = `Ton ${pokemon.name.toUpperCase()} est très heureux !`;
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
    }
    else {
        const message = `Tu n'es pas authentifié(e) !`;
        res.status(401).json({ message: message });
    }
};
exports.seeOne = seeOne;
/**************************************************************CATCH ONE*/
const catchOne = (req, res) => {
    const pokemonName = req.body.name;
    if (!pokemonName) {
        return res.status(400).json({ message: `Tu dois renseigner le nom ('name') du Pokemon à capturer !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name') {
                return res.status(400).json({ message: `Il faut renseigner le nom ('name') du Pokemon à capturer ! Rien de plus !` });
            }
        }
        if (pokemonName.length > 15) {
            return res.status(400).json({ message: `Aucun Pokemon n'a un nom aussi long !` });
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(pokemonName)) {
                return res.status(400).json({ message: `Le nom du Pokemon doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` });
            }
            else {
                pokemon_1.default.findOne({ name: pokemonName }).lean()
                    .then((pokemon) => {
                    if (pokemon !== null) {
                        if (req.auth !== undefined) {
                            const trainerName = req.auth.name;
                            if (!pokemon.trainers.includes(trainerName)) {
                                pokemon_1.default.updateOne({ name: pokemonName }, { $push: { trainers: trainerName } })
                                    .then(() => {
                                    const message = `Bravo ${trainerName.toUpperCase()} ! Tu as capturé un ${pokemonName.toUpperCase()} !`;
                                    const { _id, evolve, __v, trainers } = pokemon, filteredPokemon = __rest(pokemon, ["_id", "evolve", "__v", "trainers"]);
                                    res.status(201).json({ message: message, pokemon: filteredPokemon });
                                })
                                    .catch((error) => {
                                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                                    res.status(500).json({ message: message, error: error });
                                });
                            }
                            else {
                                const message = `Tu possèdes déjà un ${pokemonName.toUpperCase()} !`;
                                res.status(403).json({ message: message });
                            }
                        }
                        else {
                            const message = `Tu n'es pas authentifié(e) !`;
                            res.status(401).json({ message: message });
                        }
                    }
                    else {
                        const message = `Ce Pokemon n'existe pas !`;
                        res.status(404).json({ message: message });
                    }
                })
                    .catch((error) => {
                    const message = `Ce Pokemon n'existe pas !`;
                    res.status(404).json({ message: message, error: error });
                });
            }
        }
    }
};
exports.catchOne = catchOne;
/*************************************************************UPDATE ONE*/
const evolveOne = (req, res) => {
    const id = req.params.id;
    if (req.body && Object.keys(req.body).length !== 0) {
        return res.status(400).json({ message: `Il n'y a rien à envoyer ici !` });
    }
    if (req.auth !== undefined) {
        const trainerName = req.auth.name;
        pokemon_1.default.findOne({ _id: id, trainers: { $in: trainerName } })
            .then((pokemon) => {
            if (pokemon !== null) {
                const pokemonName = pokemon.name;
                if (pokemon.evolve) {
                    pokemon_1.default.updateOne({ name: pokemonName }, { $pull: { trainers: trainerName } })
                        .then(() => {
                        pokemon_1.default.findOne({ name: pokemon.evolve }).lean()
                            .then((evolution) => {
                            if (evolution !== null) {
                                const evolutionName = evolution.name;
                                pokemon_1.default.updateOne({ name: evolutionName }, { $push: { trainers: trainerName } })
                                    .then(() => {
                                    const message = `Bravo ${trainerName.toUpperCase()} ! Ton ${pokemonName.toUpperCase()} évolue en ${evolutionName.toUpperCase()} !`;
                                    const { _id, evolve, __v, trainers } = evolution, filteredEvolution = __rest(evolution, ["_id", "evolve", "__v", "trainers"]);
                                    res.status(200).json({ message: message, pokemon: filteredEvolution });
                                })
                                    .catch((error) => {
                                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                                    res.status(500).json({ message: message, error: error });
                                });
                            }
                            else {
                                const message = `${pokemonName.toUpperCase()} ne peut pas évoluer !`;
                                res.status(400).json({ message: message });
                            }
                        })
                            .catch((error) => {
                            const message = `${pokemonName.toUpperCase()} ne peut pas évoluer !`;
                            res.status(400).json({ message: message, error: error });
                        });
                    })
                        .catch((error) => {
                        const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                        res.status(500).json({ message: message, error: error });
                    });
                }
                else {
                    const message = `${pokemonName.toUpperCase()} ne peut pas évoluer !`;
                    res.status(400).json({ message: message });
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
    }
    else {
        const message = `Tu n'es pas authentifié(e) !`;
        res.status(401).json({ message: message });
    }
};
exports.evolveOne = evolveOne;
/*************************************************************DELETE ONE*/
const deleteOne = (req, res) => {
    const id = req.params.id;
    if (req.auth !== undefined) {
        const trainerName = req.auth.name;
        pokemon_1.default.findOne({ _id: id, trainers: { $in: trainerName } })
            .then((pokemon) => {
            if (pokemon !== null) {
                const pokemonName = pokemon.name;
                pokemon_1.default.updateOne({ name: pokemonName }, { $pull: { trainers: trainerName } })
                    .then(() => {
                    const message = `Tu as relâché ton ${pokemonName.toUpperCase()} !`;
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
    }
    else {
        const message = `Tu n'es pas authentifié(e) !`;
        res.status(401).json({ message: message });
    }
};
exports.deleteOne = deleteOne;
