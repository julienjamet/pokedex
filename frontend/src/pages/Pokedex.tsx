/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import { IPokedex, IPokemon } from "../interfaces"
import axios, { AxiosResponse, AxiosError } from 'axios'
/****************************************************************POKEDEX*/
export const Pokedex: FC = () => {
    /**************************************************************Hooks*/
    const [pokedex, setPokedex] = useState<IPokedex>()
    /********************************************************Middlewares*/
    useEffect((): void => {
        axios.get(`${process.env.REACT_APP_API_URL}/pokemon`, { withCredentials: true })

            .then((response: AxiosResponse): void => { setPokedex(response.data) })

            .catch((error: AxiosError): void => { console.log(error) })
    }, [pokedex])
    /*********************************************************Return TSX*/
    return (
        <>
            {pokedex ? (
                <div className="pokedex">
                    <h1>{pokedex.message}</h1>

                    <ul>
                        {pokedex.pokedex.map((pokemon: IPokemon) => {
                            return (
                                <li key={pokemon._id} className="pokemon">
                                    <span className="pokemonNumber">{pokemon.number}</span>
                                    <span className="pokemonName">{pokemon.name}</span>
                                    <img className="pokemonImage" src={pokemon.picture} alt={`${pokemon.name} cover`} />
                                    <span className="pokemonDescription">{pokemon.description}</span>
                                    <span className="pokemonType">{pokemon.type}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}