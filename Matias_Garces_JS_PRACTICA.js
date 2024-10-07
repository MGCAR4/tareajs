var edadUsuario = 29;

function puedeObtenerLicencia() {
    while (edadUsuario < 17) {
        console.log("Disculpa, debes esperar más años para conseguir tu licencia.");
        edadUsuario++;
    }

    while (edadUsuario >= 17) {
        console.log("¡Listo para obtener la licencia de conducir!");
        edadUsuario = 16;
    }
}



