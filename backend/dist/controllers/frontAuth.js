"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/*******************************************************************AUTH*/
const frontAuth = (req, res, next) => {
    const token = req.cookies.token;
    const tokenKey = process.env.TOKEN_KEY || 'token_key';
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, tokenKey);
        const name = decodedToken.name;
        req.auth = { name: name };
        res.status(200).json({ auth: req.auth });
    }
    catch (error) {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` });
    }
};
exports.frontAuth = frontAuth;
