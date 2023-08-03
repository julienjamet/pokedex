"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const trainer_1 = __importDefault(require("../models/trainer"));
/****************************************************************SIGN IN*/
const signUp = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    if (!name || !password) {
        return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') ! Rien de plus !` });
            }
        }
        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` });
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` });
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(req.body.name)) {
                return res.status(400).json({ message: `Ton nom doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` });
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(req.body.password)) {
                return res.status(400).json({ message: `Il te faut faut un mot de passe fort pour protéger tes données ! Il doit être composé d'au moins 8 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial comme '@' ou '#' !` });
            }
            else {
                bcrypt_1.default.hash(req.body.password, 10)
                    .then((hash) => {
                    const trainer = new trainer_1.default({
                        name: req.body.name,
                        password: hash
                    });
                    const trainerModel = new trainer_1.default(trainer);
                    trainerModel.save()
                        .then(() => {
                        res.status(201).json({ message: `Bienvenue ${trainer.name} !` });
                    })
                        .catch((error) => {
                        const message = `Ce nom est déjà utilisé par un autre dresseur !`;
                        res.status(500).json({ message: message, error: error });
                    });
                })
                    .catch((error) => {
                    const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                    res.status(500).json({ message: message, error: error });
                });
            }
        }
    }
};
exports.signUp = signUp;
/******************************************************************LOGIN*/
const login = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    if (!name || !password) {
        return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom ('name') et un mot de passe ('password') ! Rien de plus !` });
            }
        }
        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` });
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` });
        }
        else {
            if (!/^([^0-9\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ton nom doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` });
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Il te faut faut un mot de passe fort pour protéger tes données ! Il doit être composé d'au moins 8 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial comme '@' ou '#' !` });
            }
            else {
                trainer_1.default.findOne({ name: name })
                    .then((trainer) => {
                    if (trainer !== null) {
                        bcrypt_1.default.compare(password, trainer.password)
                            .then((valid) => {
                            if (!valid) {
                                res.status(401).json({ message: `Le mot de passe est incorrect !` });
                            }
                            else {
                                const message = `Bienvenue ${trainer.name} !`;
                                const tokenKey = process.env.TOKEN_KEY || 'token_key';
                                const token = jsonwebtoken_1.default.sign({ name: trainer.name }, tokenKey, { expiresIn: '1h' });
                                res.status(200).json({ message: message, token: token });
                            }
                        })
                            .catch((error) => {
                            const message = `Le Pokedex est en panne ! Reviens plus tard !`;
                            res.status(500).json({ message: message, error: error });
                        });
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
        }
    }
};
exports.login = login;
