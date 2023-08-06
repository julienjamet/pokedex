"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/*******************************************************************AUTH*/
const auth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization === undefined) {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` });
    }
    else {
        const token = authorization.split(' ')[1];
        const tokenKey = process.env.TOKEN_KEY || 'token_key';
        try {
            const decodedToken = jsonwebtoken_1.default.verify(token, tokenKey);
            const name = decodedToken.name;
            req.auth = { name: name };
            next();
        }
        catch (error) {
            return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` });
        }
    }
};
exports.auth = auth;
