/****************************************************************IMPORTS*/
import express, { Router } from 'express'
import { signUp, login } from '../controllers/trainers'
/*****************************************************************ROUTER*/
export const trainerRouter: Router = express.Router()
/*****************************************************************ROUTES*/
trainerRouter.post('/signup', signUp)
trainerRouter.post('/login', login)