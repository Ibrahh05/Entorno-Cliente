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
