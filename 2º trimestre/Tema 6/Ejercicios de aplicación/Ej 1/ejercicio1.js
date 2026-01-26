window.onload = function() {
    var tabla = document.getElementById("cuerpoTabla");
    var elCuerpo = document.body;

    // Boton Generar
    var botonGenerar = document.createElement("button");
    botonGenerar.innerHTML = "Generar planta";
    elCuerpo.prepend(botonGenerar);

    botonGenerar.onclick = function() {
        var nombre = prompt("Nombre de la planta:");
        var ubicacion = prompt("Ubicación:");
        var ejemplares = prompt("Ejemplares:");
        var flor = prompt("¿Tiene flor?");

        var fila = document.createElement("tr");

        var celda1 = document.createElement("td");
        celda1.innerHTML = nombre;
        fila.appendChild(celda1);

        var celda2 = document.createElement("td");
        celda2.innerHTML = ubicacion;
        fila.appendChild(celda2);

        var celda3 = document.createElement("td");
        celda3.innerHTML = ejemplares;
        fila.appendChild(celda3);

        var celda4 = document.createElement("td");
        celda4.innerHTML = flor;
        fila.appendChild(celda4);

        tabla.appendChild(fila);

    };

    // Boton Borrar
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar fila";
    botonGenerar.after(botonBorrar);

    botonBorrar.onclick = function() {
        var filas = tabla.getElementsByTagName("tr");
        if (filas.length > 0) {
            tabla.removeChild(filas[filas.length - 1]);
        }
    };

    // Boton Contar
    var botonContar = document.createElement("button");
    botonContar.innerHTML = "Mostrar número de filas";
    elCuerpo.appendChild(botonContar);

    botonContar.onclick = function() {
        var total = tabla.getElementsByTagName("tr").length;
        alert("Número de filas: " + total);
    };
};