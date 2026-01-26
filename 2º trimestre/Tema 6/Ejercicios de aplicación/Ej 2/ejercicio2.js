window.onload = function() {
    var elCuerpo = document.body;
    var contenedor = document.getElementById("contenedorPersonajes");

    // Boton Generar
    var botonGenerar = document.createElement("button");
    botonGenerar.innerHTML = "Generar personaje";
    elCuerpo.prepend(botonGenerar);

    botonGenerar.onclick = function() {
        var opcion = prompt("Elija el nombre del personaje: 1. Sanji, 2. Zoro, 3. Nami, 4. Luffy");
        var imagen = document.createElement("img");
        imagen.className = "estiloImagen";

        switch(opcion) {
            case "1":
                imagen.src = "img_onepeace/sanji.png";
                imagen.alt = "sanji";
                break;
            case "2":
                imagen.src = "img_onepeace/zoro.png";
                imagen.alt = "zoro";
                break;
            case "3":
                imagen.src = "img_onepeace/nami.png";
                imagen.alt = "nami";
                break;
            case "4":
                imagen.src = "img_onepeace/luffy.png";
                imagen.alt = "luffy";
                break;
            default:
                alert("Ese no vale");
                return;
        }
        contenedor.appendChild(imagen);
    };

    // Boton Borrar
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar personaje";
    botonGenerar.after(botonBorrar);

    botonBorrar.onclick = function() {
        var listaImgs = contenedor.getElementsByTagName("img");
        if (listaImgs.length > 0) {
            contenedor.removeChild(listaImgs[listaImgs.length - 1]);
        }
    };

    // Botones de conteo
    function crearBotonContar(nombre) {
        var btn = document.createElement("button");
        btn.innerHTML = "No " + nombre;
        elCuerpo.appendChild(btn);

        btn.onclick = function() {
            var todas = contenedor.getElementsByTagName("img");
            var cuenta = 0;
            for (var i = 0; i < todas.length; i++) {
                if (todas[i].alt === nombre.toLowerCase()) {
                    cuenta++;
                }
            }
            alert(nombre + ": " + cuenta);
        };
    }

    crearBotonContar("Sanji");
    crearBotonContar("Zoro");
    crearBotonContar("Nami");
    crearBotonContar("Luffy");
};