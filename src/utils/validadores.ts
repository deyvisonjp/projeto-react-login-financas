
const validarEmail = (email: string) => {
    return email?.toString().includes('@') && email.toString().includes('.')
}

const validarSenha = (password: string) => {
    return password?.toString().length > 6
}

export {
    validarEmail,
    validarSenha
}