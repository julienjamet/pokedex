/****************************************************************IMPORTS*/
import express, { Router } from 'express'
import { seeAll, seeOne, catchOne, evolveOne, deleteOne } from '../controllers/pokemon'
/*****************************************************************ROUTER*/
export const router: Router = express.Router()
/*****************************************************************ROUTES*/
router.get('/', seeAll)
router.get('/:id', seeOne)
router.post('/', catchOne)
router.put('/:id', evolveOne)
router.delete('/:id', deleteOne)