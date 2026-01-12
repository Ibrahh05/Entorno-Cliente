function calcularIMC() {
            let altura = document.getElementById('altura').value / 100;
            let peso = document.getElementById('peso').value;

            if (altura <= 0 || peso <= 0) {
                alert("Error en los datos");
                return;
            }

            let imc = (peso / (altura * altura)).toFixed(2);
            let escala = "";

            if (imc < 16) escala = "Infrapeso severo";
            else if (imc < 17) escala = "Infrapeso moderado";
            else if (imc < 18.5) escala = "Infrapeso aceptable";
            else if (imc < 25) escala = "Peso normal";
            else if (imc < 30) escala = "Sobrepeso";
            else if (imc < 35) escala = "Obeso I";
            else if (imc < 40) escala = "Obeso II";
            else escala = "Obeso III";

            document.getElementById("IMC").innerHTML = imc;
            document.getElementById("escala").innerHTML = escala;
}