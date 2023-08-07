/****************************************************************IMPORTS*/
import express, { Application } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import { auth } from './controllers/auth'
import { sendAuthToFront } from './controllers/sendAuthToFront'
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
app.use(cookieParser())
app.use(helmet())
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET,POST,PUT,DELETE', credentials: true }))
app.use('/api/trainer', trainerRouter)
app.get('/api/auth', auth, sendAuthToFront)
app.use('/api/pokemon', auth, rank, pokemonRouter)
/*****************************************************************LISTEN*/
app.listen(port, (): void => console.log(`Ecoute sur le port ${port}`))