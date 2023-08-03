/****************************************************************IMPORTS*/
import { RequestHandler, Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface authRequest extends Request {
    auth?: {
        name: string
    }
}
/*******************************************************************AUTH*/
export const auth: RequestHandler = (req: authRequest, res: Response, next: NextFunction): Response | void => {
    const authorization: string | undefined = req.headers.authorization

    if (authorization === undefined) {
        return res.status(401).json({ message: `Accès non-autorisé !` })
    }
    else {
        const token: string = authorization.split(' ')[1]
        const tokenKey: string = process.env.TOKEN_KEY || 'token_key'

        const decodedToken: { name: string } = jwt.verify(token, tokenKey) as { name: string }
        const name: string = decodedToken.name
        req.auth = { name: name }

        next()
    }
}