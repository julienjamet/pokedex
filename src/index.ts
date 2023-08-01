/****************************************************************IMPORTS*/
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import favicon from 'serve-favicon'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import router from './routes/pokemon'
/********************************************************************APP*/
const app: { use: Function, listen: Function } = express()
const port: number = 3000

dotenv.config()
const connectionString: string = process.env.DATABASE_CREDENTIALS || 'Insert your MongoDB string here'
mongoose.connect(connectionString)
    .then(() => console.log('Connection à MongoDB établie !'))
    .catch(() => console.log('Connection à MongoDB échouée !'))
/********************************************************************USE*/
app.use(favicon(__dirname + '/favicon.ico'))
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use('/api/pokemon', router)
/*****************************************************************LISTEN*/
app.listen(port, () => console.log(`Ecoute sur le port ${port}`))