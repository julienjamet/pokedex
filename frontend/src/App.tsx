/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import axios, { AxiosError } from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Pokedex } from "./pages/Pokedex"
import { Pokemon } from "./pages/Pokemon"
import { Catch } from "./pages/Catch"
import { FormModal } from "./components/FormModal"
/********************************************************************APP*/
export const App: FC = () => {
  /**************************************************************Hooks*/
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  /********************************************************Middlewares*/
  /********************************************************Get auth*/
  useEffect((): void => {
    axios.get(`${process.env.REACT_APP_API_URL}/frontauth`, { withCredentials: true })

      .then((): void => { setIsLoggedIn(true) })
      .catch((error: AxiosError): void => { console.log(error) })
  }, [])
  /*********************************************************Return TSX*/
  return (
    <>
      {
        isLoggedIn ? (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokedex/:id" element={<Pokemon />} />
              <Route path="/catch" element={<Catch />} />
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