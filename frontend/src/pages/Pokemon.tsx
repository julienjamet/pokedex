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
    /*************************************************Handle scroll*/
    const smoothScrollToBottom = (duration: number): void => {
        if (document.scrollingElement) {
            const startingY: number = document.scrollingElement.scrollTop
            const targetY: number = document.scrollingElement.scrollHeight
            const startTime: number = performance.now()

            const scrollStep = (timestamp: number): void => {
                const currentTime = timestamp - startTime
                const scrollDistance = targetY - startingY

                if (document.scrollingElement) {
                    document.scrollingElement.scrollTop = startingY + scrollDistance * (currentTime / duration)

                    if (currentTime < duration) {
                        requestAnimationFrame(scrollStep)
                    }
                }
            }

            requestAnimationFrame(scrollStep)
        }
    }
    /*************************************************Handle evolve*/
    const handleEvolve = (): void => {
        const body: HTMLElement | null = document.querySelector("body")
        const evolveError: HTMLElement | null = document.querySelector('.evolve.error')

        if (body) {
            axios.put(`${process.env.REACT_APP_API_URL}/pokemon/${id}`, {}, { withCredentials: true })

                .then((response: AxiosResponse): void => {
                    setVanish(true)

                    setTimeout((): void => {
                        setIdToChange(response.data.pokemon._id)

                        setTimeout((): void => {
                            setAppear(true)

                            setTimeout((): void => {
                                if (evolveError) {
                                    evolveError.textContent = response.data.message
                                    evolveError.style.color = "green"
                                    evolveError.style.backgroundColor = "rgb(241, 235, 235)"

                                    smoothScrollToBottom(2000)
                                }
                            }, 800)
                        }, 200)
                    }, 800)
                })
                .catch((error: AxiosError): void => {
                    body.classList.add("error")

                    setTimeout((): void => {
                        body.classList.remove("error")
                    }, 400)

                    if (error.response) {
                        const responseData: { message: string } = error.response.data as { message: string }

                        if (responseData && typeof responseData === 'object' && 'message' in responseData && evolveError) {
                            evolveError.textContent = responseData.message
                            evolveError.style.color = "red"
                            evolveError.style.backgroundColor = "rgb(241, 235, 235)"

                            if (document.scrollingElement) {
                                document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight
                            }
                        }
                    }
                })
        }
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
                            <li className={`${getTypeDesign(pokemon.pokemon.type[0])} list-item ${vanish ? 'vanish' : ''}`}>
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

                            <li className={`${getTypeDesign(pokemon.pokemon.type[0])} list-item ${appear ? 'appear' : 'hidden'}`}>
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