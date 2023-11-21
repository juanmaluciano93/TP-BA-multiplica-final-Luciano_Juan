//Solito edad de usuario para validar si es mayor de edad
let edad

while (true) {
    let entrada = prompt("¿Cuántos años tienes?");

    if (entrada === null) {
        // El usuario ha cancelado
        continue;
    }

    edad = parseInt(entrada)
    
    if (edad < 18 || isNaN(edad)) {
        alert("Usted es menor de edad o no completo el campo solicitado. Acceso denegado");
    } else {
        // El usuario es mayor de edad, salir del bucle
        break;
    }
}

alert("BIENVENIDO/A!!");