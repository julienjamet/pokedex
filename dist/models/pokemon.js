"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const mongoose_1 = __importDefault(require("mongoose"));
/*****************************************************************SCHEMA*/
const pokemon = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    hp: { type: Number, required: true },
    cp: { type: Number, required: true },
    picture: { type: String, required: true, unique: true },
    types: { type: [String], required: true },
});
/****************************************************************EXPORTS*/
exports.default = mongoose_1.default.model('Pokemon', pokemon);
