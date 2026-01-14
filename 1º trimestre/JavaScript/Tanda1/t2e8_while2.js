let nombreBien = "adolfo";
let apellidoBien = "suarez";
let mensaje = "¿Cuál fue el primer presidente de la democracia española?";
let entrada;

function norm(texto) {
  return texto.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

while (true) {
  entrada = prompt(mensaje);
  if (!entrada) break; 

  let respuesta = norm(entrada);
  let nombre = norm(nombreBien);
  let apellido = norm(apellidoBien);

  if (respuesta === nombre) {
    alert("Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?");
  } else if (respuesta === apellido) {
    alert("Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?");
  } else if (respuesta === nombre + " " + apellido || respuesta === nombre + apellido) {
    alert("¡Correcto!");
    break;
  } else {
    alert("Incorrecto. Inténtalo de nuevo.");
  }
}
