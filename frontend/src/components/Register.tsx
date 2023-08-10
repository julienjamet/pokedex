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
    const handleForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const body: HTMLElement | null = document.querySelector('body')
        const nameError: HTMLElement | null = document.querySelector('.name.error')
        const passwordError: HTMLElement | null = document.querySelector('.password.error')
        const validatePasswordError: HTMLElement | null = document.querySelector('.validatePassword.error')

        if (body) {
            if (password !== validatePassword && validatePasswordError) {
                body.classList.add("error")

                setTimeout((): void => {
                    body.classList.remove("error")
                }, 400)

                validatePasswordError.textContent = `Les mots de passe ne correspondent pas !`
                validatePasswordError.style.color = "red"
                validatePasswordError.style.backgroundColor = "rgb(241, 235, 235)"

                if (nameError && passwordError) {
                    nameError.textContent = ""
                    nameError.style.backgroundColor = "salmon"

                    passwordError.textContent = ""
                    passwordError.style.backgroundColor = "salmon"
                }
            }
            else if (validatePasswordError) {
                validatePasswordError.textContent = ``
                validatePasswordError.style.backgroundColor = "salmon"

                axios.post(`${process.env.REACT_APP_API_URL}/trainer/signup`, { name: name, password: password })

                    .then((): void => {
                        if (nameError && passwordError) {
                            nameError.textContent = ""
                            passwordError.textContent = ""
                            validatePasswordError.textContent = ""

                            body.style.backgroundColor = "#c9f0d4"
                            nameError.style.backgroundColor = "#c9f0d4"
                            passwordError.style.backgroundColor = "#c9f0d4"
                            validatePasswordError.style.backgroundColor = "#c9f0d4"
                        }

                        setTimeout((): void => { window.location.reload() }, 500)
                    })
                    .catch((error: AxiosError): void => {
                        body.classList.add("error")

                        setTimeout((): void => {
                            body.classList.remove("error")
                        }, 400)

                        if (error.response) {
                            const responseData: { message: string } | { errors: { name: string } } = error.response.data as { message: string } | { errors: { name: string } }

                            if (responseData && typeof responseData === 'object' && 'message' in responseData) {
                                const regexErrorMessage: string = responseData.message

                                if (regexErrorMessage.includes("nom") && nameError) {
                                    nameError.textContent = regexErrorMessage
                                    nameError.style.color = "red"
                                    nameError.style.backgroundColor = "rgb(241, 235, 235)"
                                }
                                else if (regexErrorMessage.includes("mot de passe") && passwordError && nameError) {
                                    passwordError.textContent = regexErrorMessage
                                    passwordError.style.color = "red"
                                    passwordError.style.backgroundColor = "rgb(241, 235, 235)"

                                    nameError.textContent = ""
                                    nameError.style.backgroundColor = "salmon"
                                }
                            }
                            else if (responseData && typeof responseData === 'object' && 'errors' in responseData && nameError) {
                                nameError.textContent = responseData.errors.name
                            }
                        }
                    })
            }
        }
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