let num = Number(prompt("Introduce un número entero:"));

alert(
  "Exponencial: " + num.toExponential() + "\n" +
  "Con 4 decimales: " + num.toFixed(4) + "\n" +
  "Binario: " + num.toString(2) + "\n" +
  "Octal: " + num.toString(8) + "\n" +
  "Hexadecimal: " + "0x" + num.toString(16)
);
