/****************************************************************IMPORTS*/
import { ChangeEvent, FC, FormEvent, useState } from "react"
import axios, { AxiosError } from "axios"
/***************************************************************REGISTER*/
export const Register: FC = () => {
    /**************************************************************Hooks*/
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validatePassword, setValidatePassword] = useState<string>('')
    /********************************************************Middlewares*/
    const handleForm = (e: FormEvent<HTMLFormElement>): string | void => {
        e.preventDefault()

        const body: HTMLElement | null = document.querySelector('body')
        const nameError: HTMLElement | null = document.querySelector('.name.error')
        const passwordError: HTMLElement | null = document.querySelector('.password.error')
        const validatePasswordError: HTMLElement | null = document.querySelector('.validatePassword.error')

        if (password !== validatePassword) {
            if (validatePasswordError) {
                validatePasswordError.textContent = `Les mots de passe ne correspondent pas !`
                validatePasswordError.style.color = "red"
                validatePasswordError.style.backgroundColor = "white"

                if (nameError && passwordError) {
                    nameError.textContent = ""
                    nameError.style.backgroundColor = "salmon"

                    passwordError.textContent = ""
                    passwordError.style.backgroundColor = "salmon"

                    return validatePasswordError.textContent = `Les mots de passe ne correspondent pas !`
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
            if (validatePasswordError) {
                validatePasswordError.textContent = ``
                validatePasswordError.style.backgroundColor = "salmon"
            }
            else {
                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
            }
        }

        axios.post(`${process.env.REACT_APP_API_URL}/trainer/signup`, { name: name, password: password })

            .then((): void => {
                if (body && nameError && passwordError) {
                    validatePasswordError.textContent = ""
                    nameError.textContent = ""
                    passwordError.textContent = ""

                    body.style.backgroundColor = "#c9f0d4"
                    validatePasswordError.style.backgroundColor = "#c9f0d4"
                    nameError.style.backgroundColor = "#c9f0d4"
                    passwordError.style.backgroundColor = "#c9f0d4"
                }
                else {
                    return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }

                setTimeout((): void => { window.location.reload() }, 500)
            })
            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: { message: string } | { errors: { name: string } } = error.response.data as { message: string } | { errors: { name: string } }

                    if (responseData && 'message' in responseData) {
                        const regexErrorMessage: string = responseData.message

                        if (regexErrorMessage.includes("nom")) {
                            if (nameError && passwordError) {
                                nameError.textContent = regexErrorMessage
                                nameError.style.color = "red"
                                nameError.style.backgroundColor = "white"

                                passwordError.textContent = ""
                                passwordError.style.backgroundColor = "salmon"
                            }
                            else {
                                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
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
                                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                            }
                        }
                        else {
                            return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                        }
                    }
                    else if (responseData && 'errors' in responseData) {
                        const nameNotAvailableErrorMessage: string = responseData.errors.name

                        if (nameError) {
                            nameError.textContent = nameNotAvailableErrorMessage
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
                    placeholder="ex: Thomas"
                    id="name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} />
                <div className="name error"></div>

                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    placeholder="ex: P@sswor3"
                    id="password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)} />
                <div className="password error"></div>

                <label htmlFor="validatePassword">Confirmer le mot de passe</label>
                <input
                    type="password"
                    id="validatePassword"
                    value={validatePassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setValidatePassword(e.target.value)} />
                <div className="validatePassword error"></div>

                <input type="submit" className="submit" value="Inscription" />
            </form>
        </div>
    )
}