export interface ITrainer {
    name: string,
    password: string,
    pokemon: number[]
}

export interface IPokemon {
    number: number,
    name: string,
    evolve: string,
    description: string,
    picture: string,
    type: string[]
}