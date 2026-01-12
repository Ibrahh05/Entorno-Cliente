let edad;
edad = prompt("Introduce tu edad:");
if (isNaN(edad)){
    alert("No has introducido un número válido");
}
switch (true) {
    case (edad <= 12):
        alert("Eres un niño"); 
        break;
    case (edad > 12 && edad <= 26):
        alert("Eres un joven");
        break;
    case (edad > 26 && edad <= 60):
        alert("Eres un adulto");
        break;
    default:
        alert("Eres un jubilado");
        break;
}

