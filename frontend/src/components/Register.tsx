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

        const nameError: HTMLElement | null = document.querySelector('.name.error')
        const passwordError: HTMLElement | null = document.querySelector('.password.error')
        const validatePasswordError: HTMLElement | null = document.querySelector('.validatePassword.error')

        const submitForm: HTMLElement | null = document.querySelector('.signUpForm')
        const submitButton: HTMLElement | null = document.querySelector('.submit')

        if (password !== validatePassword) {
            if (validatePasswordError) {
                return validatePasswordError.textContent = `Les mots de passe ne correspondent pas !`
            }
            else {
                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
            }
        }
        else {
            if (validatePasswordError) {
                validatePasswordError.textContent = ``
            }
            else {
                return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
            }
        }

        axios.post(`${process.env.REACT_APP_API_URL}/trainer/signup`, { name: name, password: password })

            .then((): void => {
                if (submitForm && submitButton) {
                    submitForm.style.backgroundColor = "#c9f0d4"

                    submitButton.style.color = "#76ba6a"
                    submitButton.style.backgroundColor = "white"
                    submitButton.style.borderColor = "#76ba6a"
                }
                else {
                    return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }

                setTimeout((): void => { window.location.reload() }, 500)
            })
            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: unknown = error.response.data

                    if (responseData && typeof responseData === 'object' && 'message' in responseData) {
                        const regexErrorMessage: string = responseData.message as string

                        if (regexErrorMessage.includes("nom")) {
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
                    else if (responseData && typeof responseData === 'object' && 'errors' in responseData) {
                        const responseDataErrors: { name: string } = responseData.errors as { name: string }

                        if (typeof responseDataErrors === 'object' && 'name' in responseDataErrors) {
                            const nameNotAvailableErrorMessage: string = responseDataErrors.name as string

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