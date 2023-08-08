/****************************************************************IMPORTS*/
import { FC } from "react"
import { NavLink } from "react-router-dom"
/*****************************************************************NAVBAR*/
export const NavBar: FC = () => {
    /*********************************************************Return TSX*/
    return (
        <nav>
            <NavLink to="/pokedex">Pokedex</NavLink>
            <NavLink to="/catch">Attrape-les tous !</NavLink>
        </nav>
    )
}