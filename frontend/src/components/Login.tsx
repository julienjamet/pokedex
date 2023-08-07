/****************************************************************IMPORTS*/
import { FC, useState, FormEvent, ChangeEvent } from "react"
import axios, { AxiosError } from "axios"
import { ILogin } from "../interfaces"
/******************************************************************LOGIN*/
export const Login: FC<ILogin> = ({ setIsLoggedIn }) => {
    /**************************************************************Hooks*/
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    /********************************************************Middlewares*/
    const handleForm = (e: FormEvent<HTMLFormElement>): string | void => {
        e.preventDefault()

        const nameError: HTMLElement | null = document.querySelector('.name.error')
        const passwordError: HTMLElement | null = document.querySelector('.password.error')

        axios.post(`${process.env.REACT_APP_API_URL}/trainer/login`, { name: name, password: password }, { withCredentials: true })

            .then((): void => { setIsLoggedIn(true) })

            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: unknown = error.response.data

                    if (responseData && typeof responseData === 'object' && 'message' in responseData) {
                        const RegexErrorMessage: string = responseData.message as string

                        if (RegexErrorMessage.includes("dresseur")) {
                            if (nameError && passwordError) {
                                nameError.textContent = RegexErrorMessage
                                passwordError.textContent = ""
                            }
                            else {
                                return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else if (RegexErrorMessage.includes("mot de passe")) {
                            if (passwordError && nameError) {
                                passwordError.textContent = RegexErrorMessage
                                nameError.textContent = ""
                            }
                            else {
                                return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else {
                            return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else if (responseData && typeof responseData === 'object' && 'error' in responseData) {
                        const responseDataError: string = responseData.error as string

                        if (nameError && passwordError) {
                            nameError.textContent = responseDataError
                            passwordError.textContent = ""
                        }
                        else {
                            return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else {
                        return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                    }
                }
                else {
                    return console.error(`Le Pokedex est en panne ! Reviens plus tard !`)
                }
            })
    }
    /*********************************************************Return TSX*/
    return (
        <form action="" className="loginForm" onSubmit={handleForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} />
            <div className="name error"></div>

            <label htmlFor="password">Mot de passe</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)} />
            <div className="password error"></div>

            <input type="submit" className="submit" value="Connexion" />
        </form>
    )
}