window.onload = function() {
    const formulario = document.getElementById('discoForm');

    // Asignamos la validación mediante AddEventListener
    formulario.addEventListener('submit', function(event) {
        let esValido = true;

        // 1. Validar Nombre y Artista usando la misma función (campo20)
        if (!campo20('nombre')) esValido = false;
        if (!campo20('artista')) esValido = false;

        // 2. Validar Año (4 caracteres numéricos obligatorios)
        if (!validarAnio('anio')) esValido = false;

        // 3. Validar Localización (Vacío o numérico)
        if (!validarLocalizacion('localizacion')) esValido = false;

        // Si alguna validación falla, cancelamos el envío
        if (!esValido) {
            event.preventDefault();
        } else {
            alert("Formulario enviado correctamente.");
        }
    });
};

/**
 * Valida que el campo sea obligatorio y no supere los 20 caracteres.
 */
function campo20(id) {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    const valor = input.value.trim();

    if (valor === "" || valor.length > 20) {
        marcarError(input, label);
        return false;
    } else {
        marcarExito(input, label);
        return true;
    }
}

/**
 * Valida que el año tenga exactamente 4 caracteres numéricos.
 */
function validarAnio(id) {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    const valor = input.value.trim();
    
    // Expresión regular: solo números, exactamente 4 dígitos
    const regexAnio = /^[0-9]{4}$/;

    if (!regexAnio.test(valor)) {
        marcarError(input, label);
        return false;
    } else {
        marcarExito(input, label);
        return true;
    }
}

/**
 * Valida que el campo esté vacío o sea un valor numérico.
 */
function validarLocalizacion(id) {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    const valor = input.value.trim();

    // Válido si está vacío O si es un número
    if (valor === "" || !isNaN(valor)) {
        marcarExito(input, label);
        return true;
    } else {
        marcarError(input, label);
        return false;
    }
}

// FUNCIONES AUXILIARES PARA ESTILOS (AMPLIACIÓN)

function marcarError(input, label) {
    input.classList.add('input-error');
    label.classList.add('label-error');
}

function marcarExito(input, label) {
    input.classList.remove('input-error');
    label.classList.remove('label-error');
}