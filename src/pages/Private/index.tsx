import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h1>Página Privada</h1>
            <h4>Olá {auth.user?.name}, bem vindo!</h4>
        </div>
    )
}