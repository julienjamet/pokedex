/****************************************************************IMPORTS*/
import { authRequest } from '../interfaces/interfaces'
import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
/*******************************************************************AUTH*/
export const auth = (req: authRequest, res: Response, next: NextFunction): Response | void => {
    const token: string = req.cookies.token
    const tokenKey: string = process.env.TOKEN_KEY || 'token_key'

    try {
        const decodedToken: { name: string } = jwt.verify(token, tokenKey) as { name: string }
        const name: string = decodedToken.name
        req.auth = { name: name }

        next()
    }
    catch (error) {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` })
    }
}