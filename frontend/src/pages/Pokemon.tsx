/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IPokemonResponse } from "../interfaces"
import axios, { AxiosResponse, AxiosError } from 'axios'
/****************************************************************POKEDEX*/
export const Pokemon: FC = () => {
    /**************************************************************Hooks*/
    const { id } = useParams()
    const [pokemon, setPokemon] = useState<IPokemonResponse>()
    /********************************************************Middlewares*/
    useEffect((): void => {
        axios.get(`${process.env.REACT_APP_API_URL}/pokemon/${id}`, { withCredentials: true })

            .then((response: AxiosResponse): void => { setPokemon(response.data) })

            .catch((error: AxiosError): void => { console.log(error) })
    }, [id])
    /********************************************************Type design*/
    const getTypeDesign = (type: string): string => {
        switch (type) {
            case "PLANTE":
                return "plante"

            case "FEU":
                return "feu"

            case "EAU":
                return "eau"

            case "ELECTRIK":
                return "electrik"

            case "PSY":
                return "psy"

            case "COMBAT":
                return "combat"

            case "VOL":
                return "vol"

            case "SOL":
                return "sol"

            case "ROCHE":
                return "roche"

            case "GLACE":
                return "glace"

            case "NORMAL":
                return "normal"

            case "POISON":
                return "poison"

            case "DRAGON":
                return "dragon"

            case "INSECTE":
                return "insecte"

            case "FÉE":
                return "fée"

            default:
                return ""
        }
    }
    /*********************************************************Return TSX*/
    return (
        <>
            {pokemon ? (
                <div className="pokedex">
                    <h1>{pokemon.message}</h1>

                    <ul className="pokemon">
                        <li className="pokemon">
                            <span className="number" id={getTypeDesign(pokemon.pokemon.type[0])}>{pokemon.pokemon.number}</span>
                            <span className="name">{pokemon.pokemon.name}</span>
                            <img className="image" src={pokemon.pokemon.picture} alt={`${pokemon.pokemon.name} cover`} />
                            <span className="description">{pokemon.pokemon.description}</span>
                            <div className="types">
                                {pokemon.pokemon.type.map((type: string, index: number): JSX.Element => (
                                    <span key={index} id={getTypeDesign(type)}>{type}</span>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div >
            ) : (
                <div></div>
            )}
        </>
    )
}