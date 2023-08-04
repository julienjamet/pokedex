"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const mongoose_1 = __importDefault(require("mongoose"));
/*****************************************************************SCHEMA*/
const pokemon = new mongoose_1.default.Schema({
    number: { type: Number, required: true },
    name: { type: String, unique: true, required: true, uppercase: true },
    evolve: { type: String, uppercase: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
    type: { type: [String], required: true },
    trainers: { type: [String], uppercase: true }
});
/****************************************************************EXPORTS*/
exports.default = mongoose_1.default.model('Pokemon', pokemon);
