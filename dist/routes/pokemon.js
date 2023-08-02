"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/****************************************************************IMPORTS*/
const express_1 = __importDefault(require("express"));
const pokemon_1 = require("../controllers/pokemon");
/*****************************************************************ROUTER*/
exports.router = express_1.default.Router();
/*****************************************************************ROUTES*/
exports.router.get('/', pokemon_1.getAll);
exports.router.get('/:id', pokemon_1.getOne);
exports.router.post('/', pokemon_1.catchOne);
exports.router.put('/:id', pokemon_1.updateOne);
exports.router.delete('/:id', pokemon_1.deleteOne);
