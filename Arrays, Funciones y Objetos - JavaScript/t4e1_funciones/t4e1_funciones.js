function calcularCategoria() {
            let edad = parseInt(document.getElementById('edad').value);
            let categoria = "";

            if (edad <= 5) categoria = "Micros";
            else if (edad <= 7) categoria = "Prebenjamín";
            else if (edad <= 9) categoria = "Benjamín";
            else if (edad <= 11) categoria = "Alevín";
            else if (edad <= 13) categoria = "Infantil";
            else if (edad <= 15) categoria = "Cadete";
            else if (edad <= 17) categoria = "Juvenil";
            else if (edad <= 19) categoria = "Junior";
            else if (edad <= 22) categoria = "Sub-23";
            else if (edad <= 39) categoria = "Senior";
            else categoria = "Veterano";

            document.getElementById("categoria").innerHTML = categoria;
}
//----------------------------------------------------------------------------------
function calcularFCM() {
            let sexo = document.querySelector('input[name="sexo"]:checked');
            let edad = document.getElementById('edad').value;

            if (!sexo || !edad) {
                alert("Faltan datos");
                return;
            }

            let fcm;
            if (sexo.value === "h") fcm = 220 - edad;
            else fcm = 226 - edad;

            document.getElementById("FCM").innerHTML = fcm;
            document.getElementById("zona_recuperacion").innerHTML = Math.round(fcm * 0.6) + "-" + Math.round(fcm * 0.7);
            document.getElementById("zona_aerobica").innerHTML = Math.round(fcm * 0.7) + "-" + Math.round(fcm * 0.8);
            document.getElementById("zona_anaerobica").innerHTML = Math.round(fcm * 0.8) + "-" + Math.round(fcm * 0.9);
            document.getElementById("linea_roja").innerHTML = Math.round(fcm * 0.9) + "-" + fcm;
}
//-------------------------------------------------------------------------------------------------------------------------------
function generarHorarios() {
            let html = "<h3>Horario Mañana</h3><table>";
            html += "<tr><th>Hora</th><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th></tr>";
            
            for (let h = 9; h <= 13; h += 2) {
                html += "<tr><th>" + h + ":00-" + (h+2) + ":00</th>";
                for (let d = 0; d < 5; d++) {
                    html += "<td></td>";
                }
                html += "</tr>";
            }
            html += "</table>";

            html += "<h3>Horario Tarde</h3><table>";
            html += "<tr><th>Hora</th><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr>";
            
            for (let h = 16; h <= 20; h++) {
                html += "<tr><th>" + h + ":00-" + (h+1) + ":00</th>";
                for (let d = 0; d < 7; d++) {
                    html += "<td></td>";
                }
                html += "</tr>";
            }
            html += "</table>";

            document.getElementById("horarios").innerHTML = html;
}
//----------------------------------------------------------------------------------------------------------------------------
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