const personajes = [
    { nombre: 'Homer', img: './imagenes/homero.jpg' },
    { nombre: 'Marge', img: './imagenes/marge.jpg' },
    { nombre: 'Bart', img: './imagenes/bart.jpg' },
    { nombre: 'Lisa', img: './imagenes/lisa.png' },
    { nombre: 'Maggie', img: './imagenes/magie.jpg' },
    { nombre: 'Moe', img: './imagenes/moe.webp' }
];

// Creamos el mazo con 12 cartas (parejas) y lo mezclamos
let mazo = [...personajes, ...personajes];
mazo.sort(() => Math.random() - 0.5);

// Variables de control
let carta1 = null;
let celda1 = null;
let puntos = 0;
let bloqueado = false;

// Al cargar, asignamos las rutas de las imágenes a los <img> pero siguen invisibles
mazo.forEach((p, i) => {
    document.getElementById('img' + i).src = p.img;
});

function voltear(celda, id) {
    if (bloqueado || celda.style.borderColor === 'green') return;

    let imagen = document.getElementById('img' + id);
    imagen.style.display = 'block'; // Mostrar imagen

    if (carta1 === null) {
        // Es la primera carta que toca
        carta1 = mazo[id];
        celda1 = celda;
    } else {
        // Es la segunda carta
        if (celda === celda1) return; // Si toca la misma, no hacer nada
        
        bloqueado = true;
        if (carta1.nombre === mazo[id].nombre) {
            // ¡ACIERTO!
            celda.style.borderColor = 'green';
            celda1.style.borderColor = 'green';
            puntos++;
            document.getElementById('puntos').value = puntos;
            resetVariables();
        } else {
            // FALLO: Esperar medio segundo y ocultar
            setTimeout(() => {
                imagen.style.display = 'none';
                celda1.querySelector('img').style.display = 'none';
                resetVariables();
            }, 500);
        }
    }
}

function resetVariables() {
    carta1 = null;
    celda1 = null;
    bloqueado = false;
}