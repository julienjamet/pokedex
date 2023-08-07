/****************************************************************IMPORTS*/
import express, { Application } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { auth } from './controllers/auth'
import { rank } from './controllers/rank'
import { trainerRouter } from './routes/trainer'
import { pokemonRouter } from './routes/pokemon'
/********************************************************************APP*/
const app: Application = express()
/*************************************************************DB CONNECT*/
dotenv.config()
const port: string | number = process.env.PORT || 3000
const connectionString: string = process.env.DATABASE_CREDENTIALS || 'Insert your MongoDB string here'
mongoose.connect(connectionString)

    .then((): void => console.log('Connection à MongoDB établie !'))
    .catch((): void => console.log('Connection à MongoDB échouée !'))
/********************************************************************USE*/
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use('/api/trainer', trainerRouter)
app.use('/api/pokemon', auth, rank, pokemonRouter)
/*****************************************************************LISTEN*/
app.listen(port, (): void => console.log(`Ecoute sur le port ${port}`))