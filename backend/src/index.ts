/****************************************************************IMPORTS*/
import express, { Application } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import { trainerRouter } from './routes/trainer'
import { auth } from './controllers/auth'
import { rank } from './controllers/rank'
import { pokemonRouter } from './routes/pokemon'
import { frontAuth } from './controllers/frontAuth'
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
app.use(cookieParser())
app.use(helmet())
app.use(cors({ origin: process.env.FRONT_URL, methods: 'GET, POST, PUT, DELETE', credentials: true }))
app.use('/api/trainer', trainerRouter)
app.use('/api/pokemon', auth, rank, pokemonRouter)
/*************************************************************FRONT AUTH*/
app.get('/api/frontauth', frontAuth)
/*****************************************************************LISTEN*/
app.listen(port, (): void => console.log(`Ecoute sur le port ${port}`))