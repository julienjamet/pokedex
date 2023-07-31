export interface IApp {
    get: Function,
    listen: Function,
    use: Function,
    post: Function,
    put: Function,
    delete: Function
}

export interface IPokemon {
    id: number,
    name: string,
    hp: number,
    cp: number,
    picture: string,
    types: string[]
}