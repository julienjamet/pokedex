/****************************************************************IMPORTS*/
import { FC, useState, MouseEvent } from "react"
import { ILogin } from "../interfaces"
import { Register } from "./Register"
import { Login } from "./Login"
/*************************************************************FORM MODAL*/
export const FormModal: FC<ILogin> = ({ isLoggedIn, setIsLoggedIn }) => {
    /**************************************************************Hooks*/
    const [signUpModal, setSignUpModal] = useState(false)
    const [loginModal, setLoginModal] = useState(true)
    /********************************************************Middlewares*/
    const handleModal = (e: MouseEvent<HTMLButtonElement>): void => {
        const target = e.target as HTMLButtonElement

        if (target.id === "register") {
            setSignUpModal(true)
            setLoginModal(false)
        }
        else {
            setSignUpModal(false)
            setLoginModal(true)
        }
    }
    /*********************************************************Return TSX*/
    return (
        <div className="connectionForm">
            <div className="formContainer">

                <button id="register" className={signUpModal ? "btn--active" : ""} onClick={handleModal}>S'inscrire</button>
                <button id="login" className={loginModal ? "btn--active" : ""} onClick={handleModal}>Se connecter</button>

                {signUpModal && <Register />}
                {loginModal && <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            </div>
        </div >
    )
}