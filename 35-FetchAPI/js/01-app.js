const cargarDatos = document.querySelector('#cargarTxt');
cargarDatos.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    const url = 'data/datos.txt';

    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text()
        })
        .then( data =>{
            console.log(data);
        })
        .catch( error => {
            console.log(error);
        })
}