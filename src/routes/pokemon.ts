/****************************************************************IMPORTS*/
import express, { Router } from 'express'
import { getAll, getOne, catchOne, updateOne, deleteOne } from '../controllers/pokemon'
/*****************************************************************ROUTER*/
export const router: Router = express.Router()
/*****************************************************************ROUTES*/
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', catchOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)