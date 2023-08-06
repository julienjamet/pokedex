/****************************************************************IMPORTS*/
import { Request } from "express"
/************************************************************AUTHREQUEST*/
export interface authRequest extends Request {
    auth?: {
        name: string
    }
}
/****************************************************************TRAINER*/
export interface ITrainer {
    name: string,
    password: string,
    level: number,
    rank: string
}
/****************************************************************POKEMON*/
export interface IPokemon {
    _id: string,
    number: number,
    name: string,
    evolve: string,
    description: string,
    picture: string,
    type: string[],
    trainers: string[],
    __v: number,
    level: number,
    isCatchable: boolean
}