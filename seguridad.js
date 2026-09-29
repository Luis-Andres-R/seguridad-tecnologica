function verificarAcceso(usuario) {
    if (usuario === "administrador") {
        return "Acceso autorizado";
    }

    return "Acceso denegado";
}

console.log(verificarAcceso("administrador"));