/****************************************************************IMPORTS*/
import { FC, useState, useEffect } from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FormModal } from "./components/FormModal"
import { Pokedex } from "./pages/Pokedex"
import { Pokemon } from "./pages/Pokemon"
/********************************************************************APP*/
export const App: FC = () => {

  /**************************************************************Hooks*/
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  /********************************************************Middlewares*/
  useEffect((): void => {
    const token: string = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log('token', token)
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setIsLoggedIn(true)
    }
  }, [])
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
          <FormModal />
        )
      }
    </>
  )
}