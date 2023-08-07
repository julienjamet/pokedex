/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import axios from 'axios'
/****************************************************************POKEDEX*/
export const Pokedex: FC = () => {

    const [pokedex, setPokedex] = useState([])

    useEffect((): void => {
        console.log("CONNECTE")
        axios.get(`${process.env.REACT_APP_API_URL}/pokemon`)

            .then((response) => {
                console.log(response)
                //setPokedex(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [pokedex])

    return (
        <div>
            BONJOUR
        </div>
    )
}