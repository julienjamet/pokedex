/****************************************************************IMPORTS*/
import { FC, useState, FormEvent, ChangeEvent } from "react"
import axios, { AxiosError, AxiosResponse } from "axios"
/******************************************************************CATCH*/
export const Catch: FC = () => {
    /**************************************************************Hooks*/
    const [name, setName] = useState<string>('')
    /********************************************************Middlewares*/
    /***************************************************Handle form*/
    const handleForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const body: HTMLElement | null = document.querySelector("body")
        const nameError: HTMLElement | null = document.querySelector('.name.error')

        if (body) {
            axios.post(`${process.env.REACT_APP_API_URL}/pokemon`, { name: name }, { withCredentials: true })

                .then((response: AxiosResponse): void => {
                    if (nameError) {
                        nameError.textContent = response.data.message
                        nameError.style.color = "green"
                        nameError.style.backgroundColor = "rgb(241, 235, 235)"
                    }
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
                <div className="name error"></div>

                <input type="submit" className="submit" value="ATTRAPER !" />
            </form>
        </div>
    )
}