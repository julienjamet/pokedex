/****************************************************************IMPORTS*/
import express, { Application } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './routes/pokemon'
/********************************************************************APP*/
const app: Application = express()
/*************************************************************DB CONNECT*/
dotenv.config()
const connectionString: string = process.env.DATABASE_CREDENTIALS || 'Insert your MongoDB string here'
mongoose.connect(connectionString)

    .then((): void => console.log('Connection à MongoDB établie !'))
    .catch((): void => console.log('Connection à MongoDB échouée !'))
/********************************************************************USE*/
app.use(express.json())
app.use('/api/pokemon', router)
/*****************************************************************LISTEN*/
app.listen(3000, (): void => console.log('Ecoute sur le port 3000'))