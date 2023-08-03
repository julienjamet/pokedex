/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import { IPokemon } from "../interfaces/interfaces"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        number: { type: Number, unique: true, required: true },
        name: { type: String, unique: true, required: true, uppercase: true },
        evolve: { type: String },
        description: { type: String, unique: true, required: true },
        picture: { type: String, unique: true, required: true },
        type: { type: [String], required: true }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model('Pokemon', pokemon)