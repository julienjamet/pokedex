"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonRouter = void 0;
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const pokemon_1 = require("../controllers/pokemon");
/*****************************************************************ROUTER*/
exports.pokemonRouter = express_1.default.Router();
/*****************************************************************ROUTES*/
exports.pokemonRouter.get('/', pokemon_1.seeAll);
exports.pokemonRouter.get('/:id', pokemon_1.seeOne);
exports.pokemonRouter.post('/', pokemon_1.catchOne);
exports.pokemonRouter.put('/:id', pokemon_1.evolveOne);
exports.pokemonRouter.delete('/:id', pokemon_1.deleteOne);
