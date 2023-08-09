/******************************************************************LOGIN*/
export interface ILogin {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
/****************************************************************POKEDEX*/
export interface IPokedex {
    message: string,
    rank?: string | undefined,
    forNextRank?: string | undefined,
    pokedex: IPokemon[]
}
/******************************************************IPOKEMON RESPONSE*/
export interface IPokemonResponse {
    message: string,
    pokemon: IPokemon
}
/****************************************************************POKEMON*/
export interface IPokemon {
    _id?: string | undefined,
    number: number,
    name: string,
    evolve?: string | undefined,
    description: string,
    picture: string,
    type: string[]
}