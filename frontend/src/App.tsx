/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Pokedex } from "./pages/Pokedex"
import { Pokemon } from "./pages/Pokemon"
import { FormModal } from "./components/FormModal"
/********************************************************************APP*/
export const App: FC = () => {

  /**************************************************************Hooks*/
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  /********************************************************Middlewares*/
  useEffect((): void => {
    if (isLoggedIn) {
      axios.get(`${process.env.REACT_APP_API_URL}/auth`, { withCredentials: true })

        .then((): void => { setIsLoggedIn(true) })
        .catch((): void => { setIsLoggedIn(false) })
    }
  }, [isLoggedIn])
  /*********************************************************Return TSX*/
  return (
    <>
      {
        isLoggedIn ? (
          <BrowserRouter>
            <Routes>
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokemon" element={<Pokemon />} />
              <Route path="/*" element={<Pokedex />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <FormModal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </>
  )
}