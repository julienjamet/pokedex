/****************************************************************IMPORTS*/
import { NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
/*******************************************************************AUTH*/
module.exports = (req: Request, res: Response, next: NextFunction): Response | void => {
    const authorization: string | null = req.headers.get('authorization')

    if (!authorization) {
        return res.status(401).json({ message: `Accès non-autorisé !` })
    }
    else {
        const token: string = authorization.split(' ')[1]
        dotenv.config()
        const tokenKey: string = process.env.TOKEN_KEY || 'token_key'
        const decodedToken = jwt.verify(token, tokenKey)
        const name = decodedToken.name
        req.auth = { email: email }
        next()
    }
}