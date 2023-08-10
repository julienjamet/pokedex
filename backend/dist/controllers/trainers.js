"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const trainer_1 = __importDefault(require("../models/trainer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/****************************************************************SIGN IN*/
const signUp = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    if (!name || !password) {
        return res.status(400).json({ message: `Il te faut un nom et un mot de passe !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Il te faut un nom et un mot de passe ! Rien de plus !` });
            }
        }
        if (name.length > 12) {
            return res.status(400).json({ message: `Ce nom est trop long ! 12 caractères au maximum !` });
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Ce mot de passe est trop long ! 30 caractères au maximum !` });
        }
        else {
            if (!/^([^\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ton nom doit être composé d'au moins deux lettres et ne doit comporter aucun caractère spécial !` });
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Il te faut faut un mot de passe fort pour protéger tes données ! Il doit être composé d'au moins 8 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial comme '@' ou '#' !` });
            }
            else {
                bcrypt_1.default.hash(password, 10)
                    .then((hash) => {
                    const trainer = new trainer_1.default({
                        name: name,
                        password: hash,
                        level: 1,
                        rank: "DÉBUTANT"
                    });
                    const trainerModel = new trainer_1.default(trainer);
                    trainerModel.save()
                        .then(() => {
                        res.status(201).json({ message: `Bienvenue ${name.toUpperCase()} ! Tu peux maintenant te connecter à ta session !` });
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
        return res.status(400).json({ message: `Tu dois te connecter avec un nom et un mot de passe !` });
    }
    else {
        for (let key in req.body) {
            if (key !== 'name' && key !== 'password') {
                return res.status(400).json({ message: `Tu dois te connecter avec un nom et un mot de passe ! Rien de plus !` });
            }
        }
        if (name.length > 12) {
            return res.status(400).json({ message: `Ce dresseur n'existe pas !` });
        }
        else if (password.length >= 30) {
            return res.status(400).json({ message: `Le mot de passe est forcément incorrect car il ne correspond pas aux normes du Pokedex !` });
        }
        else {
            if (!/^([^\s-<>≤≥«»© ↓¬,?¿;.×:/÷!§¡%´*`€^¨$£²¹&~"#'{(|`_@°=+)}\[\]\\]{2,})$/.test(name)) {
                return res.status(400).json({ message: `Ce dresseur n'existe pas !` });
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/.test(password)) {
                return res.status(400).json({ message: `Le mot de passe est forcément incorrect car il ne correspond pas aux critères de sécurité du Pokedex !` });
            }
            else {
                trainer_1.default.findOne({ name: name })
                    .then((trainer) => {
                    if (trainer) {
                        bcrypt_1.default.compare(password, trainer.password)
                            .then((valid) => {
                            if (valid) {
                                const message = `Bienvenue ${name.toUpperCase()} !`;
                                const tokenKey = process.env.TOKEN_KEY || 'token_key';
                                const token = jsonwebtoken_1.default.sign({ name: name.toUpperCase() }, tokenKey, { expiresIn: '1h' });
                                res.cookie('token', token, {
                                    httpOnly: true,
                                    secure: true,
                                    sameSite: 'strict',
                                    path: '/',
                                    domain: process.env.COOKIE_DOMAIN,
                                    maxAge: 3600 * 1000
                                });
                                res.status(200).json({ message: message });
                            }
                            else {
                                res.status(401).json({ message: `Le mot de passe est incorrect !` });
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
