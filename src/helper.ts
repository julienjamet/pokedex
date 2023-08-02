import IPokemon from "./interface"

export const success = (message: string, data?: IPokemon | IPokemon[], error?: {}): { message: string, data?: IPokemon | IPokemon[], error?: {} } => {
    return { message, data, error }
}