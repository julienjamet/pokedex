"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rank = void 0;
const pokemon_1 = __importDefault(require("../models/pokemon"));
const trainer_1 = __importDefault(require("../models/trainer"));
/*******************************************************************AUTH*/
const rank = (req, res, next) => {
    if (req.auth !== undefined) {
        const name = req.auth.name;
        pokemon_1.default.find({ trainers: name }).countDocuments()
            .then((numberOfPokemon) => {
            if (numberOfPokemon === 151) {
                trainer_1.default.updateOne({ name: name }, { $set: { level: 6, rank: "LÉGENDE" } })
                    .then(() => {
                    next();
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
            else if (numberOfPokemon === 150) {
                trainer_1.default.updateOne({ name: name }, { $set: { level: 5, rank: "MAÎTRE DRESSEUR" } })
                    .then(() => {
                    next();
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
            else if (numberOfPokemon >= 146) {
                trainer_1.default.updateOne({ name: name }, { $set: { level: 4, rank: "CHAMPION" } })
                    .then(() => {
                    next();
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
            else if (numberOfPokemon >= 115) {
                trainer_1.default.updateOne({ name: name }, { $set: { level: 3, rank: "CHASSEUR" } })
                    .then(() => {
                    next();
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
            else if (numberOfPokemon >= 43) {
                trainer_1.default.updateOne({ name: name }, { $set: { level: 2, rank: "COLLECTIONNEUR" } })
                    .then(() => {
                    next();
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
            else {
                next();
            }
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
exports.rank = rank;
