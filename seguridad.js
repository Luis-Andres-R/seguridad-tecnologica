function verificarAcceso(usuario, clave) {
    if (usuario === "administrador" && clave === "1234") {
        return "Acceso autorizado";
    }

    return "Acceso denegado";
}

console.log(verificarAcceso("administrador", "1234"));