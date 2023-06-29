import { useState } from "react"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"
import { useApi } from "../../hooks/useApi";


export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if(storageData) {
            const data = await api.validateToken(storageData);
            if (data) {
                setUser(data)
            }
        }
    }

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.access_token) {
            setToken(data.access_token);
            validateToken();
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
        console.log(user);
    }

    const setToken = (token:string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={ { user, signin, signout } }>
            {children}
        </AuthContext.Provider>
    )
}