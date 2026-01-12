let edad;
edad = prompt("Introduce tu edad:");
if (isNaN(edad)){
    alert("No has introducido un número válido");
}
if (edad <= 12){
    alert("Eres un niño");
}else if (edad > 12 && edad <= 26){
    alert("Eres un joven");
}else if (edad > 26 && edad <= 60){
    alert("Eres un adulto");
}else{
    alert("Eres un jubilado");
}
