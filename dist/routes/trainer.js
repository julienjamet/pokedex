"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainerRouter = void 0;
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const trainers_1 = require("../controllers/trainers");
/*****************************************************************ROUTER*/
exports.trainerRouter = express_1.default.Router();
/*****************************************************************ROUTES*/
exports.trainerRouter.post('/signup', trainers_1.signUp);
exports.trainerRouter.post('/login', trainers_1.login);
