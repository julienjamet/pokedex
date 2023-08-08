/******************************************************************LOGIN*/
export interface ILogin {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
/****************************************************************TRAINER*/
export interface IPokedex {
    message: string,
    rank?: string | undefined,
    forNextRank?: string | undefined,
    pokedex: IPokemon[]
}
/****************************************************************POKEMON*/
export interface IPokemon {
    _id?: string | undefined,
    number: number,
    name: string,
    description: string,
    picture: string,
    type: string[]
}