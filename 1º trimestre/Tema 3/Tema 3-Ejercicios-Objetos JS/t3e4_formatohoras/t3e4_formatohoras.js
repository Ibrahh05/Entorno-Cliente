let opcion = prompt("Elige formato de hora:\n1. 14:35:07\n2. 02:35 PM o 02:35:07 AM");

let hora = new Date();

switch (opcion) {
  case "1":
    alert(hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds());
    break;
  case "2":
    alert(hora.toLocaleTimeString("en-US"));
    break;
  default:
    alert("Opción no válida");
}
