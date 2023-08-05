"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************IMPORTS*/
const mongoose_1 = __importDefault(require("mongoose"));
/*****************************************************************SCHEMA*/
const trainer = new mongoose_1.default.Schema({
    name: { type: String, unique: true, required: true, uppercase: true },
    password: { type: String, required: true },
    level: { type: Number, required: true },
    rank: { type: String, required: true }
});
/****************************************************************EXPORTS*/
exports.default = mongoose_1.default.model('Trainer', trainer);
