const formualrio = document.querySelector('#formulario');

formualrio.addEventListener('submit', validarFormulario);

function validarFormulario (e) {
    e.preventDefault();

    console.log('Consultar la API');

    console.log(e.target.action);
}