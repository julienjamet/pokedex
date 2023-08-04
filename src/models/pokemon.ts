/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import { IPokemon } from "../interfaces/interfaces"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        number: { type: Number, required: true },
        name: { type: String, unique: true, required: true, uppercase: true },
        evolve: { type: String, uppercase: true },
        description: { type: String, required: true },
        picture: { type: String, required: true },
        type: { type: [String], required: true },
        trainers: { type: [String], uppercase: true }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model('Pokemon', pokemon)