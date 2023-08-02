/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import IPokemon from "../interfaces/pokemon"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        picture: { type: String, unique: true }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model<IPokemon>('Pokemon', pokemon)