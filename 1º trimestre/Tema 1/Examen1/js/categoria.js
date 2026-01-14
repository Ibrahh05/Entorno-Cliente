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