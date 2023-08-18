/****************************************************************IMPORTS*/
import { FC, useState, FormEvent, ChangeEvent } from "react"
import { IPokemon } from "../interfaces"
import axios, { AxiosError, AxiosResponse } from "axios"
/******************************************************************CATCH*/
export const Catch: FC = () => {
    /**************************************************************Hooks*/
    const [name, setName] = useState<string | undefined>('')
    const [pokemon, setPokemon] = useState<IPokemon>()
    const [catchAppear, setCatchAppear] = useState<boolean>(false)
    const [msgAppear, setMsgAppear] = useState<boolean>(false)
    /********************************************************Middlewares*/
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
    /***************************************************Handle form*/
    const handleForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const body: HTMLElement | null = document.querySelector("body")
        const nameError: HTMLElement | null = document.querySelector('.name.error')

        if (body) {
            axios.post(`${process.env.REACT_APP_API_URL}/pokemon`, { name: name }, { withCredentials: true })

                .then((response: AxiosResponse): void => {
                    setName('')
                    setPokemon(response.data.pokemon)
                    setCatchAppear(true)

                    setTimeout((): void => {
                        setCatchAppear(false)
                        setMsgAppear(true)

                        if (nameError) {
                            nameError.textContent = response.data.message
                            nameError.style.color = "green"
                            nameError.style.backgroundColor = "rgb(241, 235, 235)"
                            nameError.style.marginTop = "-200px"
                        }
                    }, 3600)
                })
                .catch((error: AxiosError): void => {
                    body.classList.add("error")

                    setTimeout((): void => {
                        body.classList.remove("error")
                    }, 400)

                    if (error.response) {
                        const responseData: { message: string } = error.response.data as { message: string }

                        if (responseData && typeof responseData === 'object' && 'message' in responseData && nameError) {
                            nameError.textContent = responseData.message
                            nameError.style.color = "red"
                            nameError.style.backgroundColor = "rgb(241, 235, 235)"
                        }
                    }
                })
        }
    }
    /*********************************************************Return TSX*/
    return (
        <div className="formPage">
            <form action="" className="form" onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Choisis un Pokemon à attraper !"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} />

                {pokemon && (
                    <ul>
                        <li className={`${getTypeDesign(pokemon.type[0])} list-item ${catchAppear ? 'catchAppear' : 'hidden'}`}>
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
                    </ul>
                )}

                <div className={`name error ${catchAppear ? 'hidden' : ''} ${msgAppear ? 'appear' : ''}`}></div>

                <input type="submit" className={`submit ${catchAppear ? 'hidden' : ''} ${msgAppear ? 'appear' : ''}`} value="ATTRAPER !" />
            </form>
        </div>
    )
}