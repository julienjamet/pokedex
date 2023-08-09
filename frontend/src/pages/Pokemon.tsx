/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IPokemonResponse } from "../interfaces"
import axios, { AxiosResponse, AxiosError } from 'axios'
/****************************************************************POKEDEX*/
export const Pokemon: FC = () => {
    /**************************************************************Hooks*/
    const { id } = useParams()
    const [idToChange, setIdToChange] = useState<string | undefined>(id)
    const [pokemon, setPokemon] = useState<IPokemonResponse>()
    const [vanish, setVanish] = useState<boolean>(false)
    const [appear, setAppear] = useState<boolean>(false)
    /********************************************************Middlewares*/
    /******************************************************Get data*/
    useEffect((): void => {
        axios.get(`${process.env.REACT_APP_API_URL}/pokemon/${idToChange}`, { withCredentials: true })

            .then((response: AxiosResponse): void => { setPokemon(response.data) })

            .catch((error: AxiosError): void => { console.log(error) })
    }, [idToChange])
    /***************************************************Type design*/
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
    /*************************************************Handle evolve*/
    const handleEvolve = (): void => {
        const evolveError: HTMLElement | null = document.querySelector('.evolve.error')

        axios.put(`${process.env.REACT_APP_API_URL}/pokemon/${id}`, {}, { withCredentials: true })

            .then((response: AxiosResponse): void => {
                if (evolveError) {
                    evolveError.textContent = response.data.message
                    evolveError.style.color = "green"
                    evolveError.style.backgroundColor = "white"

                    setVanish(true)

                    setTimeout((): void => {
                        setIdToChange(response.data.pokemon._id)
                        setTimeout((): void => {
                            setAppear(true)
                        }, 200)
                    }, 800)
                }
                else {
                    console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }
            })
            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: { message: string } = error.response.data as { message: string }

                    if (responseData && typeof responseData === 'object' && 'message' in responseData) {
                        const regexErrorMessage: string = responseData.message as string

                        if (evolveError) {
                            evolveError.textContent = regexErrorMessage
                            evolveError.style.color = "red"
                            evolveError.style.backgroundColor = "white"
                        }
                        else {
                            console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else {
                        console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                    }
                }
                else {
                    console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }
            })
    }
    /*********************************************************Return TSX*/
    return (
        <>
            {pokemon ? (
                <div className="pokedex">
                    <h1>{pokemon.message}</h1>

                    <div className="managePokemon">
                        <button className="submit" onClick={handleEvolve}>Faire évoluer</button>

                        <ul className="pokemon">
                            <li className={`list-item ${!vanish ? '' : 'vanish'}`}>
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

                            <li className={`list-item ${appear ? 'appear' : 'hidden'}`}>
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

                        <button>Relâcher</button>
                    </div>

                    <div className="evolve error"></div>
                </div >
            ) : (
                <div></div>
            )}
        </>
    )
}