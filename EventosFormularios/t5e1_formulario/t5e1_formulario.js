
let misDiscos = [];

const formulario = document.getElementById('discoForm');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const nuevoDisco = {
        nombre: document.getElementById('nombre').value,
        artista: document.getElementById('artista').value,
        anio: document.getElementById('anio').value,
        tipo: document.getElementById('tipo').value,
        localizacion: document.getElementById('localizacion').value,
        prestado: document.getElementById('prestado').checked // true o false
    };

    misDiscos.push(nuevoDisco);

    alert('¡Disco guardado con éxito!');
    formulario.reset();
    
    console.log('Colección actualizada:', misDiscos);
});