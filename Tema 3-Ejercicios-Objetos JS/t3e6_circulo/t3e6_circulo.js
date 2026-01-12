let radio = parseFloat(prompt("Introduce el radio (en cm):"));

let diametro = 2 * radio;
let perimetro = 2 * Math.PI * radio;
let area = Math.PI * Math.pow(radio, 2);
let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

alert(
  "Radio: " + radio + " cm\n" +
  "Diámetro: " + diametro + " cm\n" +
  "Perímetro: " + perimetro.toFixed(2) + " cm\n" +
  "Área círculo: " + area.toFixed(2) + " cm²\n" +
  "Área esfera: " + areaEsfera.toFixed(2) + " cm²\n" +
  "Volumen esfera: " + volumen.toFixed(2) + " cm³"
);
