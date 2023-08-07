/****************************************************************IMPORTS*/
import { RequestHandler, Response } from 'express'
import { authRequest } from '../interfaces/interfaces'
/*****************************************************SEND AUTH TO FRONT*/
export const sendAuthToFront: RequestHandler = (req: authRequest, res: Response): Response | void => {
    if (req.auth) {
        res.status(200).json({ trainer: req.auth })
    }
    else {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` })
    }
}