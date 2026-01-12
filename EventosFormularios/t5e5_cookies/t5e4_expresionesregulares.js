window.onload = function() {
    const formulario = document.getElementById('formularioBolsas');
    const inputIntentos = document.getElementById('intentos');
    const btnReiniciar = document.getElementById('btnReiniciar');

    // CARGA INICIAL: Nada más abrir, buscamos si hay puntos guardados
    let inicial = getCookie("contador");
    inputIntentos.value = (inicial === "") ? 0 : inicial;

    // BOTÓN REINICIAR: Borramos la cookie y ponemos a 0
    if (btnReiniciar) {
        btnReiniciar.onclick = function() {
            deleteCookie("contador");
            inputIntentos.value = 0;
        };
    }

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            let todoCorrecto = true;

            // VALIDACIONES REGEX
            if (!validarRegex('fecha', /^\d{2}\/\d{2}\/\d{4}$/)) todoCorrecto = false;
            if (!validarRegex('cocinero', /^[A-Z]{2}[$#&]\d{4}$/)) todoCorrecto = false;
            if (!validarRegex('destinatario', /^[A-Z]{2,3}_[a-z]+:\d{4}$/)) todoCorrecto = false;

            const gramos = document.getElementById('gramos');
            const gVal = parseInt(gramos.value);
            if (isNaN(gVal) || gVal < 100 || gVal > 5000) {
                marcarError('gramos');
                todoCorrecto = false;
            } else { marcarExito('gramos'); }

            if (!validarRegex('composicion', /^\d+g([A-Z]{1,2}\d*)+$/)) todoCorrecto = false;
            if (!validarCuentaEEUU()) todoCorrecto = false;

            // SI HAY ERRORES: Sumamos el punto y lo guardamos
            if (!todoCorrecto) {
                event.preventDefault(); 
                let actual = parseInt(inputIntentos.value);
                actual++;
                setCookie("contador", actual, 7); // Guardamos por 7 días
                inputIntentos.value = actual;
            } else {
                alert("LOTE REGISTRADO CON ÉXITO.");
            }
        });
    }
};

function validarRegex(id, regex) {
    const input = document.getElementById(id);
    if (input && !regex.test(input.value)) {
        marcarError(id);
        return false;
    }
    marcarExito(id);
    return true;
}

function validarCuentaEEUU() {
    const input = document.getElementById('cuenta');
    const salida = document.getElementById('cuentaLimpia');
    if (!input) return false;

    const valor = input.value.toUpperCase();
    const regexEstructura = /^[A-Z]{2}\d{2}-\d{12}-\d{2}$/;

    if (!regexEstructura.test(valor)) {
        marcarError('cuenta');
        return false;
    }

    const letra1 = valor.charCodeAt(0) - 64;
    const letra2 = valor.charCodeAt(1) - 64;
    const sumaLetras = (letra1 + letra2).toString().padStart(2, '0');

    if (valor.substring(2, 4) !== sumaLetras) {
        marcarError('cuenta');
        return false;
    }

    const partes = valor.split('-');
    const cuenta12 = partes[1];
    const controlUsuario = partes[2];

    let s1 = 0;
    for (let i = 0; i < 6; i++) s1 += parseInt(cuenta12[i]);
    const d1 = Math.floor(s1 / 6);

    let s2 = 0;
    for (let i = 6; i < 12; i++) s2 += parseInt(cuenta12[i]);
    const d2 = Math.floor(s2 / 6);

    if (controlUsuario !== (d1.toString() + d2.toString())) {
        marcarError('cuenta');
        return false;
    }

    if (salida) salida.value = valor.replace(/-/g, "");
    marcarExito('cuenta');
    return true;
}

function marcarError(id) {
    const input = document.getElementById(id);
    const label = document.getElementById('l-' + id);
    if(input) input.classList.add('error-input');
    if(label) label.classList.add('error-label');
}

function marcarExito(id) {
    const input = document.getElementById(id);
    const label = document.getElementById('l-' + id);
    if(input) input.classList.remove('error-input');
    if(label) label.classList.remove('error-label');
}