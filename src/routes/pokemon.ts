/****************************************************************IMPORTS*/
import express from 'express'
import { getAll, getOne, catchOne, updateOne, deleteOne } from '../controllers/pokemon'

const router: { get: Function, post: Function, put: Function, delete: Function } = express.Router()
/*****************************************************************ROUTES*/
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', catchOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)
/****************************************************************EXPORTS*/
export default router