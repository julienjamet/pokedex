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
    const handleForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const nameError: HTMLElement | null = document.querySelector('.name.error')
        const passwordError: HTMLElement | null = document.querySelector('.password.error')

        axios.post(`${process.env.REACT_APP_API_URL}/trainer/login`, { name: name, password: password }, { withCredentials: true })

            .then((): void => { setIsLoggedIn(true) })

            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: { message: string } | { error: string } = error.response.data as { message: string } | { error: string }

                    if (responseData && 'message' in responseData) {
                        const regexErrorMessage: string = responseData.message

                        if (regexErrorMessage.includes("dresseur")) {
                            if (nameError && passwordError) {
                                nameError.textContent = regexErrorMessage
                                nameError.style.color = "red"
                                nameError.style.backgroundColor = "white"

                                passwordError.textContent = ""
                                passwordError.style.backgroundColor = "salmon"
                            }
                            else {
                                console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else if (regexErrorMessage.includes("mot de passe")) {
                            if (passwordError && nameError) {
                                passwordError.textContent = regexErrorMessage
                                passwordError.style.color = "red"
                                passwordError.style.backgroundColor = "white"

                                nameError.textContent = ""
                                nameError.style.backgroundColor = "salmon"
                            }
                            else {
                                console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else {
                            console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else if (responseData && 'error' in responseData) {
                        const responseDataError: string = responseData.error

                        if (nameError && passwordError) {
                            nameError.textContent = responseDataError
                            nameError.style.color = "red"
                            nameError.style.backgroundColor = "white"

                            passwordError.textContent = ""
                            passwordError.style.backgroundColor = "salmon"
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