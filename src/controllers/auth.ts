/****************************************************************IMPORTS*/
import { RequestHandler, Response, NextFunction } from 'express'
import { authRequest } from '../interfaces/interfaces'
import jwt from 'jsonwebtoken'
/*******************************************************************AUTH*/
export const auth: RequestHandler = (req: authRequest, res: Response, next: NextFunction): Response | void => {
    const authorization: string | undefined = req.headers.authorization

    if (authorization === undefined) {
        return res.status(401).json({ message: `Tu n'es pas authentifié(e) !` })
    }
    else {
        const token: string = authorization.split(' ')[1]
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
}