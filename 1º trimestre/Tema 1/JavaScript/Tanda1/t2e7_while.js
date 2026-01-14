let respuesta = prompt("Quuien fue el primer presidente de la democracia española?");
while (respuesta.toLowerCase() !== "adolfo suarez"){
    respuesta = prompt("Incorrecto. Inténtalo de nuevo:");
}

if (respuesta.toLowerCase() === "adolfo suarez"){
    alert("¡Correcto!");
}