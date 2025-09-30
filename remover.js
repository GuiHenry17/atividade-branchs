let usuarios = ["Ana", "Carlos", "Maria"];
function removerUsuario(nome) {
    usuarios = usuarios.filter(u => u !== nome);
    return `${nome} removido com sucesso!`;
}