function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function getCookie(nombre) {
    let name = nombre + "=";
    let lista = document.cookie.split(';'); // Separamos todas las cookies
    for(let i = 0; i < lista.length; i++) {
        let c = lista[i].trim(); // Quitamos espacios
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return ""; // Si no existe, devolvemos vacío
}

function deleteCookie(nombre) {
    setCookie(nombre, "", -1);
}