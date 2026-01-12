// 1. Mostrar la fecha en el calendario
function actualizarCalendario() {
    const fecha = new Date();

    
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    document.getElementById("diaSemana").innerHTML = fecha.getDate();
    document.getElementById("mes").innerHTML = meses[fecha.getMonth()];
    document.getElementById("anio").innerHTML = fecha.getFullYear();
}
actualizarCalendario();

// 2. Aviso legal en nueva ventana
document.getElementById("avisoLegal").addEventListener("click", function(e){
    e.preventDefault();
    const ventana = window.open("", "AvisoLegal", "width=400,height=300,resizable=no,scrollbars=no,toolbar=no,menubar=no,status=no");
    ventana.document.write("<h2>Aviso Legal</h2>");
    ventana.document.write("<p>Esta es la información legal de la Asociación Deportiva Castro Urdiales.</p>");
});

// 3. Ventana emergente de bienvenida después de 10 segundos
setTimeout(function() {
    const popup = window.open("", "Bienvenida", "width=300,height=150,resizable=no,scrollbars=no,toolbar=no,menubar=no,status=no");
    popup.document.write("<p>Bienvenido a nuestra web!</p>");
    popup.document.write('<button onclick="window.close()">Cerrar</button>');
}, 10000);

// 4. Comprobar contraseña segura usando funciones sencillas
document.getElementById("btnComprobar").addEventListener("click", function(){
    const contrasena = document.getElementById("inputContrasena").value;
    const resultado = document.getElementById("resultado");

    function longitudCorrecta(c) {
        return c.length >= 8 && c.length <= 16;
    }

    function tieneMayuscula(c) {
        return /[A-Z]/.test(c);
    }

    function tieneMinuscula(c) {
        return /[a-z]/.test(c);
    }

    function tieneNumero(c) {
        return /[0-9]/.test(c);
    }

    function tieneCaracterEspecial(c) {
        return /[-_@#$%&]/.test(c);
    }

    if(longitudCorrecta(contrasena) &&
    tieneMayuscula(contrasena) &&
    tieneMinuscula(contrasena) &&
    tieneNumero(contrasena) &&
    tieneCaracterEspecial(contrasena)) {
        resultado.textContent = "¡Contraseña segura!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Contraseña no segura.";
        resultado.style.color = "red";
    }
});
