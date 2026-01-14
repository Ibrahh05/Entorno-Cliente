let opcion = prompt("Elige un formato de fecha:\n1. 17/02/2016\n2. Miércoles, 17 de febrero de 2016\n3. Wednesday, February 17, 2016");

let fecha = new Date();

switch (opcion) {
  case "1":
    alert(
      fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear()
    );
    break;
  case "2":
    let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    alert(
      dias[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear()
    );
    break;
  case "3":
    alert(fecha.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
    break;
  default:
    alert("Opción no válida");
}
