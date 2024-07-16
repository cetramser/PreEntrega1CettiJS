
function obtenerSignoZodiacal() {
    let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (dd/mm): ");
    let [dia, mes] = fechaNacimiento.split("/");
    let diaNum = parseInt(dia);
    let mesNum = parseInt(mes);
    
    if (diaNum < 0 || mesNum < 0) {

        console.log("Fecha de nacimiento inválida. No se permiten números negativos.");

        return;

    }


    switch (mesNum) {
        case 1:
            if (diaNum >= 20 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Acuario");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }

            else {
                console.log("Tu signo del zodiaco es Capricornio");
            }
            break;

        case 2:
            if (diaNum >= 19 && diaNum <= 29) {
                console.log("Tu signo del zodiaco es Piscis");
            }
            else if (diaNum > 29) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Acuario");
            }
            break;

        case 3:
            if (diaNum >= 21 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Aries");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Piscis");
            }
            break;
        case 4:
            if (diaNum >= 20 && diaNum <= 30) {
                console.log("Tu signo del zodiaco es Tauro");
            }
            else if (diaNum > 30) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Aries");
            }
            break;
        case 5:
            if (diaNum >= 21 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Géminis");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Tauro");
            }
            break;
        case 6:
            if (diaNum >= 21 && diaNum <= 30) {
                console.log("Tu signo del zodiaco es Cáncer");
            }
            else if (diaNum > 30) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Géminis");
            }
            break;
        case 7:
            if (diaNum >= 23 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Leo");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Cáncer");
            }
            break;
        case 8:
            if (diaNum >= 23 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Virgo");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Leo");
            }
            break;
        case 9:
            if (diaNum >= 23 && diaNum <= 30) {
                console.log("Tu signo del zodiaco es Libra");
            }
            else if (diaNum > 30) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Virgo");
            }
            break;
        case 10:
            if (diaNum >= 23 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Escorpio");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Libra");
            }
            break;
        case 11:
            if (diaNum >= 22 && diaNum <= 30) {
                console.log("Tu signo del zodiaco es Sagitario");
            }
            else if (diaNum > 30) {
                console.log("Fecha ingresada inválida");
            }
            else {
                console.log("Tu signo del zodiaco es Escorpio");
            }
            break;
        case 12:
            if (diaNum >= 22 && diaNum <= 31) {
                console.log("Tu signo del zodiaco es Capricornio");
            }
            else if (diaNum > 31) {
                console.log("Fecha ingresada inváalida");
            }
            else {
                console.log("Tu signo del zodiaco es Sagitario");
            }
            break;
        default:
            console.log("Fecha de nacimiento inválida");
    }

}
obtenerSignoZodiacal()