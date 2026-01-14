// Array vacío donde iremos guardando discos (se rellenará desde arrays.js si procede)
let discos = [];

window.onload = () => {
if (typeof discosIniciales !== 'undefined') {
    discos = [...discosIniciales];
}
};

function escribir(titulo, contenido) {
document.getElementById("output").innerHTML += `<h3>${titulo}</h3><p>${contenido}</p>`;
}

function mostrarNumero() {
escribir("Número de discos", `Hay ${discos.length} discos.`);
}

function mostrarListado() {
let modo = prompt("¿Cómo quieres mostrarlos? (normal / reves / alfa)");
let lista = [...discos];

if (modo === "reves") lista.reverse();
else if (modo === "alfa") lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

let salida = lista.map(d => d.nombre).join(", ");
escribir("Listado de discos", salida);
}

function mostrarIntervalo() {
let intervalo = prompt("Introduce un intervalo en formato inicio-fin (ej: 1-3)");
if (!intervalo) return;

let [inicio, fin] = intervalo.split("-").map(Number);
if (isNaN(inicio) || isNaN(fin)) {
    escribir("Error", "Formato incorrecto");
    return;
}

let extraidos = discos.slice(inicio, fin + 1);
let salida = extraidos.map(d => d.nombre).join(", ");
escribir("Intervalo de discos", salida);
}

function aniadirDisco() {
let nombre = prompt("Nombre del disco a añadir:");
if (!nombre) return;

let donde = prompt("¿Añadir al principio o al final? (p/f)");
let disco = { nombre };

if (donde === "p") discos.unshift(disco);
else discos.push(disco);

escribir("Añadir disco", `Añadido '${nombre}'. Total: ${discos.length}`);
}

function borrarDisco() {
let donde = prompt("¿Borrar al principio o al final? (p/f)");
let borrado;

if (donde === "p") borrado = discos.shift();
else borrado = discos.pop();

escribir("Borrar disco", borrado ? `Borrado '${borrado.nombre}'` : "No había discos para borrar.");
}

function consultarDisco() {
let modo = prompt("Consultar por posición o por nombre? (pos/nombre)");

if (modo === "pos") {
    let pos = Number(prompt("Introduce posición:"));
    if (isNaN(pos) || pos < 0 || pos >= discos.length) {
    escribir("Consultar disco", "Posición inválida.");
    return;
    }
    escribir("Consultar disco", `En la posición ${pos} está '${discos[pos].nombre}'.`);
}

else if (modo === "nombre") {
    let nombre = prompt("Introduce nombre:");
    let disco = discos.find(d => d.nombre === nombre);
    escribir("Consultar disco", disco ? `Encontrado: '${disco.nombre}'` : "No existe ese disco.");
}
}
