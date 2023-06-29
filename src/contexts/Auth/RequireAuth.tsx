import { useContext } from 'react'
import { AuthContext } from "./AuthContext";
import { Login } from '../../pages/Login';

// Precisa de autenticação - Validar se usuário está logado e exibir a página
export const RequireAuth = ({ children } : { children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />
    }

    return children;
}