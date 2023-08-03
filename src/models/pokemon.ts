/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import IPokemon from "../interfaces/pokemon"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        number: { type: Number, unique: true, required: true },
        name: { type: String, unique: true, required: true },
        evolve: { type: String, required: true },
        description: { type: String, unique: true, required: true },
        picture: { type: String, unique: true, required: true },
        type: { type: [String], required: true }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model('Pokemon', pokemon)