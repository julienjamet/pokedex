/****************************************************************IMPORTS*/
import express, { Router } from 'express'
import { seeAll, seeOne, catchOne, evolveOne, deleteOne } from '../controllers/pokemon'
/*****************************************************************ROUTER*/
export const pokemonRouter: Router = express.Router()
/*****************************************************************ROUTES*/
pokemonRouter.get('/', seeAll)
pokemonRouter.get('/:id', seeOne)
pokemonRouter.post('/', catchOne)
pokemonRouter.put('/:id', evolveOne)
pokemonRouter.delete('/:id', deleteOne)