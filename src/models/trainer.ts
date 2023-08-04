/****************************************************************IMPORTS*/
import mongoose, { Schema } from 'mongoose'
import { ITrainer } from "../interfaces/interfaces"
/*****************************************************************SCHEMA*/
const trainer: Schema<ITrainer> = new mongoose.Schema(
    {
        name: { type: String, unique: true, required: true, uppercase: true },
        password: { type: String, required: true }
    }
)
/****************************************************************EXPORTS*/
export default mongoose.model('Trainer', trainer)