let opcion = prompt("Elige una opción:\n1. Potencia\n2. Raíz\n3. Redondeo\n4. Trigonometría");

switch (opcion) {
  case "1":
    let base = prompt("Introduce la base:");
    let exp = prompt("Introduce el exponente:");
    alert("La potencia de " + base + " elevado a " + exp + " es: " + Math.pow(base, exp));
    break;

  case "2":
    let num = prompt("Introduce un número (no negativo):");
    alert("La raíz de " + num + " es: " + Math.sqrt(num));
    break;

  case "3":
    let dec = prompt("Introduce un número decimal:");
    alert("Redondeo: " + Math.round(dec) + "\nAl alza: " + Math.ceil(dec) + "\nA la baja: " + Math.floor(dec));
    break;

  case "4":
    let ang = prompt("Introduce un ángulo (0-360):");
    let rad = (ang * Math.PI) / 180;
    alert(
      "Seno: " + Math.sin(rad) + "\nCoseno: " + Math.cos(rad) + "\nTangente: " + Math.tan(rad)
    );
    break;

  default:
    alert("Opción no válida");
}
