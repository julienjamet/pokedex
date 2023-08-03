"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const mongoose_1 = __importDefault(require("mongoose"));
/*****************************************************************SCHEMA*/
const pokemon = new mongoose_1.default.Schema({
    number: { type: Number, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    evolve: { type: String, required: true },
    description: { type: String, unique: true, required: true },
    picture: { type: String, unique: true, required: true },
    type: { type: [String], required: true }
});
/****************************************************************EXPORTS*/
exports.default = mongoose_1.default.model('Pokemon', pokemon);
