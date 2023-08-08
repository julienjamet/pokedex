/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import { IPokedex, IPokemon } from "../interfaces"
import axios, { AxiosResponse, AxiosError } from 'axios'
import { NavLink } from "react-router-dom"
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
            {pokedex ? (
                <div className="pokedex">
                    <h1>{pokedex.message}</h1>

                    <div className="rank">
                        {pokedex.rank && <h2>RANG : {pokedex.rank}</h2>}
                        {pokedex.forNextRank && <h2>{pokedex.forNextRank}</h2>}
                    </div>

                    <ul>
                        {pokedex.pokedex.map((pokemon: IPokemon): JSX.Element => (
                            <NavLink key={pokemon._id} to={`/pokedex/${pokemon._id}`}>
                                <li className="pokemon">
                                    <span className="number" id={getTypeDesign(pokemon.type[0])}>{pokemon.number}</span>
                                    <span className="name">{pokemon.name}</span>
                                    <img className="image" src={pokemon.picture} alt={`${pokemon.name} cover`} />
                                    <span className="description">{pokemon.description}</span>
                                    <div className="types">
                                        {pokemon.type.map((type: string, index: number): JSX.Element => (
                                            <span key={index} id={getTypeDesign(type)}>{type}</span>
                                        ))}
                                    </div>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div >
            ) : (
                <div></div>
            )}
        </>
    )
}