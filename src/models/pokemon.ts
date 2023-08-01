/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import IPokemon from "../interface"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        hp: { type: Number, required: true },
        cp: { type: Number, required: true },
        picture: { type: String, required: true, unique: true },
        types: { type: [String], required: true },
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model<IPokemon>('Pokemon', pokemon)