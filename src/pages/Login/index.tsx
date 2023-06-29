import { Container, LoginSection } from "./style"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Senha ou lougon incorreto.");
            }
        }
    }

    return (
        <Container>
            <LoginSection>
            <h1>Faça seu login 👋</h1>
            <Input
                name='email'
                value={email}
                placeholder='Digite seu e-mail'
                onChange={handleEmailInput}
                type='email'
            />
            <Input
                name='password'
                value={password}
                placeholder='Entre com sua senha'
                onChange={handlePasswordInput}
                type='password'
            />
            <Button
                type='button'
                text='Entrar!'
                onClick={handleLogin}
            />
            <div>
                <p>Não possui conta?</p>
                <a href="">Cadastrar</a>
            </div>
            </LoginSection>
        </Container>
    )
}