const usuarios = ["Ana", "Carlos", "Maria"];
function buscarUsuario(nome) {
    return usuarios.includes(nome)
        ? `${nome} encontrado!`
        : `${nome} não encontrado.`;
}