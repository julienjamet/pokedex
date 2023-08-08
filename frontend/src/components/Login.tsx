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
                        const regexErrorMessage: string = responseData.message as string

                        if (regexErrorMessage.includes("dresseur")) {
                            if (nameError && passwordError) {
                                nameError.textContent = regexErrorMessage
                                passwordError.textContent = ""
                            }
                            else {
                                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else if (regexErrorMessage.includes("mot de passe")) {
                            if (passwordError && nameError) {
                                passwordError.textContent = regexErrorMessage
                                nameError.textContent = ""
                            }
                            else {
                                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else {
                            return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else if (responseData && typeof responseData === 'object' && 'error' in responseData) {
                        const responseDataError: string = responseData.error as string

                        if (nameError && passwordError) {
                            nameError.textContent = responseDataError
                            passwordError.textContent = ""
                        }
                        else {
                            return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else {
                        return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                    }
                }
                else {
                    return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }
            })
    }
    /*********************************************************Return TSX*/
    return (
        <div className="formPage">
            <form action="" className="form" onSubmit={handleForm}>
                <label htmlFor="name">Nom</label>
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
        </div>
    )
}