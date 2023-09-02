const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});



function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Debe llenar todos los campos');

        return;
    }
    // Consultariamos la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
   const alerta = document.querySelector('.bg-red-100');

   if(!alerta) {
    // Creamos la alerta
    const alerta = document.createElement('div');

    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block">${mensaje}</span>
    `;

    container.appendChild(alerta);

    // Eliminamos la alerta después de 5 segundos 
    setTimeout(() => {
        alerta.remove();
    }, 5000);
   }
}

function consultarAPI(ciudad, pais) {

    const appId = 'ddc7b246b70fbb3257f1a589f6b87de4';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner();

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( datos => {

            
            
            limpiarHTML(); // Limpiar el HTML anterior

            if(datos.cod === "404") {
                mostrarError('Ciudad no encontrada, intente con otra');
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })

}

function mostrarClima(datos) {
    const { name, main: {temp, temp_max, temp_min} } = datos;

    const centigrados = kevinACentigrados(temp);
    const max = kevinACentigrados(temp_max);
    const min = kevinACentigrados(temp_min);

    const nameCity = document.createElement('p');
    nameCity.textContent = `Clima en ${name}`;
    nameCity.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMaxime = document.createElement('p');
    tempMaxime.innerHTML = `Max: ${max} &#8451`;
    tempMaxime.classList.add('text-xl');

    const tempMinime = document.createElement('p');
    tempMinime.innerHTML = `Min: ${min} &#8451`;
    tempMinime.classList.add('text-xl');
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nameCity);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxime);
    resultadoDiv.appendChild(tempMinime);


    resultado.appendChild(resultadoDiv);

} 

const kevinACentigrados = grados =>  parseInt(grados - 273.15);


function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
}