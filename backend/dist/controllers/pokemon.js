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
const trainer_1 = __importDefault(require("../models/trainer"));
/****************************************************************GET ALL*/
const seeAll = (req, res) => {
    if (req.auth !== undefined) {
        const name = req.auth.name;
        let filters = {
            trainers: name
        };
        const types = ['FEU', 'EAU', 'PLANTE', 'NORMAL', 'VOL', 'INSECTE', 'ELECTRIK', 'FÉE', 'DRAGON', 'POISON', 'COMBAT', 'GLACE', 'PSY', 'ROCHE', 'SOL'];
        if (req.query.type) {
            const query = req.query.type;
            let typeValidator = false;
            for (let each of types) {
                if (query.toUpperCase() === each) {
                    typeValidator = true;
                }
            }
            if (typeValidator) {
                filters.type = query.toUpperCase();
            }
            else {
                return res.status(400).json({ message: `Ce type n'existe pas !` });
            }
        }
        pokemon_1.default.find(filters).select({ "__v": 0, "evolve": 0, "trainers": 0, "level": 0, "isCatchable": 0 }).sort({ number: 1 })
            .then((pokedex) => {
            trainer_1.default.findOne({ name: name })
                .then((trainer) => {
                var _a;
                if (trainer) {
                    let message;
                    if (req.query.type) {
                        message = `Salut ${name.toUpperCase()} ! Tu as attrapé ${pokedex.length} Pokemon de type ${(_a = filters.type) === null || _a === void 0 ? void 0 : _a.toUpperCase()} !`;
                        return res.status(200).json({ message: message, pokedex: pokedex });
                    }
                    else {
                        const rank = trainer.rank;
                        let forNextRank;
                        let messageRank;
                        if (rank === "DÉBUTANT") {
                            forNextRank = 43 - pokedex.length;
                        }
                        else if (rank === "COLLECTIONNEUR") {
                            forNextRank = 115 - pokedex.length;
                        }
                        else if (rank === "CHASSEUR") {
                            forNextRank = 146 - pokedex.length;
                        }
                        else if (rank === "CHAMPION") {
                            forNextRank = 150 - pokedex.length;
                        }
                        else if (rank === "MAÎTRE DRESSEUR") {
                            forNextRank = 1;
                        }
                        else {
                            forNextRank = 0;
                        }
                        messageRank = `Il te manque ${forNextRank} Pokemon pour accéder au niveau supérieur !`;
                        if (pokedex.length === 0) {
                            message = `Salut ${name.toUpperCase()} ! Tu n'as attrapé aucun Pokemon ! Il est temps de commencer ton aventure !`;
                        }
                        else if (pokedex.length === 151) {
                            message = `Salut ${name.toUpperCase()} ! Tu as attrapé tous les Pokemon ! Félicitations !`;
                            return res.status(200).json({ message: message, rank: rank, pokedex: pokedex });
                        }
                        else if (pokedex.length >= 100) {
                            message = `Salut ${name.toUpperCase()} ! Tu as déjà attrapé ${pokedex.length} Pokemon ! Tu y es presque !`;
                        }
                        else {
                            message = `Salut ${name.toUpperCase()} ! Tu as déjà attrapé ${pokedex.length} Pokemon ! Continue comme ça !`;
                        }
                        res.status(200).json({ message: message, rank: rank, forNextRank: messageRank, pokedex: pokedex });
                    }
                }
                else {
                    const message = `Ce dresseur n'existe pas !`;
                    res.status(404).json({ error: message });
                }
            })
                .catch((error) => {
                const message = `Ce dresseur n'existe pas !`;
                res.status(404).json({ message: message, error: error });
            });
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
        pokemon_1.default.findOne({ _id: id, trainers: { $in: name } }).select({ "__v": 0, "_id": 0, "trainers": 0, "level": 0, "isCatchable": 0 })
            .then((pokemon) => {
            if (pokemon) {
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
    let pokemonName = req.body.name;
    if (!pokemonName) {
        return res.status(400).json({ message: `Tu dois renseigner le nom du Pokemon à capturer !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name') {
                return res.status(400).json({ message: `Il faut renseigner le nom du Pokemon à capturer ! Rien de plus !` });
            }
        }
        if (pokemonName.length > 15) {
            return res.status(400).json({ message: `Aucun Pokemon n'a un nom aussi long !` });
        }
        else {
            if (!/^([^0-9-<>≤≥«»© ↓¬,?¿;×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(pokemonName)) {
                return res.status(400).json({ message: `Le nom du Pokemon doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` });
            }
            else {
                if (pokemonName.toUpperCase() === 'NIDORAN ♀' || pokemonName.toUpperCase() === 'NIDORAN F') {
                    pokemonName = 'nidoran♀';
                }
                else if (pokemonName.toUpperCase() === 'NIDORAN ♂' || pokemonName.toUpperCase() === 'NIDORAN M') {
                    pokemonName = 'nidoran♂';
                }
                else if (pokemonName.toUpperCase() === 'M.MIME' || pokemonName.toUpperCase() === 'M MIME') {
                    pokemonName = 'm. mime';
                }
                pokemon_1.default.findOne({ name: pokemonName }).lean()
                    .then((pokemon) => {
                    if (pokemon) {
                        if (pokemon.isCatchable) {
                            if (req.auth !== undefined) {
                                const trainerName = req.auth.name;
                                if (!pokemon.trainers.includes(trainerName)) {
                                    trainer_1.default.findOne({ name: trainerName })
                                        .then((trainer) => {
                                        if (trainer) {
                                            if (pokemon.level <= trainer.level) {
                                                pokemon_1.default.updateOne({ name: pokemonName }, { $push: { trainers: trainerName } })
                                                    .then(() => {
                                                    const message = `Bravo ${trainerName.toUpperCase()} ! Tu as attrapé un ${pokemonName.toUpperCase()} !`;
                                                    const { _id, evolve, __v, trainers, level, isCatchable } = pokemon, filteredPokemon = __rest(pokemon, ["_id", "evolve", "__v", "trainers", "level", "isCatchable"]);
                                                    res.status(201).json({ message: message, pokemon: filteredPokemon });
                                                })
                                                    .catch((error) => {
                                                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                                                    res.status(500).json({ message: message, error: error });
                                                });
                                            }
                                            else {
                                                const message = `Tu n'es pas encore assez expérimenté(e) pour attraper un ${pokemonName.toUpperCase()} ! Entraîne-toi sur des Pokemon moins puissants !`;
                                                res.status(403).json({ message: message });
                                            }
                                        }
                                        else {
                                            const message = `Ce dresseur n'existe pas !`;
                                            res.status(404).json({ error: message });
                                        }
                                    })
                                        .catch((error) => {
                                        const message = `Ce dresseur n'existe pas !`;
                                        res.status(404).json({ message: message, error: error });
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
                            const message = `${pokemonName.toUpperCase()} n'existe pas à l'état sauvage ! Tu ne peux l'obtenir que par évolution !`;
                            res.status(403).json({ message: message });
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
            if (pokemon) {
                const pokemonName = pokemon.name;
                if (pokemon.evolve) {
                    pokemon_1.default.findOne({ name: pokemon.evolve }).lean()
                        .then((evolution) => {
                        if (evolution) {
                            const evolutionName = evolution.name;
                            if (!evolution.trainers.includes(trainerName)) {
                                trainer_1.default.findOne({ name: trainerName })
                                    .then((trainer) => {
                                    if (trainer) {
                                        if (evolution.level <= trainer.level) {
                                            pokemon_1.default.updateOne({ name: evolutionName }, { $push: { trainers: trainerName } })
                                                .then(() => {
                                                const message = `Bravo ${trainerName.toUpperCase()} ! Ton ${pokemonName.toUpperCase()} évolue en ${evolutionName.toUpperCase()} !`;
                                                const { evolve, __v, trainers, level, isCatchable } = evolution, filteredEvolution = __rest(evolution, ["evolve", "__v", "trainers", "level", "isCatchable"]);
                                                res.status(200).json({ message: message, pokemon: filteredEvolution });
                                            })
                                                .catch((error) => {
                                                const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                                                res.status(500).json({ message: message, error: error });
                                            });
                                        }
                                        else {
                                            const message = `Tu n'es pas encore assez expérimenté(e) pour faire évoluer ton ${pokemonName.toUpperCase()} ! Entraîne-toi sur des Pokemon moins puissants !`;
                                            res.status(403).json({ message: message });
                                        }
                                    }
                                    else {
                                        const message = `Ce dresseur n'existe pas !`;
                                        res.status(404).json({ error: message });
                                    }
                                })
                                    .catch((error) => {
                                    const message = `Ce dresseur n'existe pas !`;
                                    res.status(404).json({ message: message, error: error });
                                });
                            }
                            else {
                                const message = `Tu possèdes déjà un ${evolutionName.toUpperCase()} ! ${pokemonName} n'évolue pas !`;
                                res.status(403).json({ message: message });
                            }
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
            if (pokemon) {
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
