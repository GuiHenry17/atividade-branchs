function login(user, pass) {
    if (user === "admin" && pass === "1234") {
        return "Login realizado com sucesso!";
    }
    return "Usuário ou senha inválidos.";
}