/****************************************************************IMPORTS*/
import { FC, useState, FormEvent, ChangeEvent } from "react"
import axios, { AxiosError, AxiosResponse } from "axios"
/******************************************************************CATCH*/
export const Catch: FC = () => {
    /**************************************************************Hooks*/
    const [name, setName] = useState<string>('')
    /********************************************************Middlewares*/
    const handleForm = (e: FormEvent<HTMLFormElement>): string | void => {
        e.preventDefault()

        const nameError: HTMLElement | null = document.querySelector('.name.error')

        axios.post(`${process.env.REACT_APP_API_URL}/pokemon`, { name: name }, { withCredentials: true })

            .then((response: AxiosResponse): void => {
                if (nameError) {
                    nameError.textContent = response.data.message
                    nameError.style.color = "green"
                    nameError.style.backgroundColor = "rgb(241, 235, 235)"
                }
                else {
                    return console.log(`Le Pokedex est en panne ! Reviens plus tard !`)
                }
            })
            .catch((error: AxiosError): void => {
                if (error.response) {
                    const responseData: unknown = error.response.data

                    if (responseData && typeof responseData === 'object' && 'message' in responseData) {
                        const regexErrorMessage: string = responseData.message as string

                        if (nameError) {
                            nameError.textContent = regexErrorMessage
                            nameError.style.color = "red"
                            nameError.style.backgroundColor = "rgb(241, 235, 235)"
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
                <input
                    type="text"
                    placeholder="Choisis un Pokemon à attraper !"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} />
                <div className="name error"></div>

                <input type="submit" className="submit" value="ATTRAPER !" />
            </form>
        </div>
    )
}