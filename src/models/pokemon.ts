/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import IPokemon from "../interfaces/pokemon"
/*****************************************************************SCHEMA*/
const pokemon: Schema<IPokemon> = new mongoose.Schema(
    {
        number: { type: Number, unique: true },
        name: { type: String, required: true, unique: true },
        picture: { type: String, unique: true },
        description: { type: String, unique: true },
        type: { type: [String] }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model('Pokemon', pokemon)