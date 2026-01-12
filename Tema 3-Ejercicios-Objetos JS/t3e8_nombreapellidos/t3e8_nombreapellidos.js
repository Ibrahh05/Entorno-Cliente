let nombreCompleto = prompt("Introduce tu nombre y apellidos:");
let partes = nombreCompleto.trim().split(" ");

let nombre = partes[0];
let apellido1 = partes[1];
let apellido2 = partes[2];

let sinEspacios = nombreCompleto.replace(/ /g, "");

alert(
  "Tamaño sin espacios: " + sinEspacios.length + "\n" +
  "Minúsculas: " + nombreCompleto.toLowerCase() + "\n" +
  "Mayúsculas: " + nombreCompleto.toUpperCase() + "\n\n" +
  "Nombre: " + nombre + "\nApellido 1: " + apellido1 + "\nApellido 2: " + apellido2 + "\n\n" +
  "Usuario 1: " + nombre[0].toLowerCase() + apellido1.toLowerCase() + apellido2[0].toLowerCase() + "\n" +
  "Usuario 2: " + nombre.slice(0,3).toLowerCase() + apellido1.slice(0,3).toLowerCase() + apellido2.slice(0,3).toLowerCase()
);
