/****************************************************************IMPORTS*/
import { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Pokedex } from "./pages/Pokedex"
import { Pokemon } from "./pages/Pokemon"
/********************************************************************APP*/
export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/*" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}