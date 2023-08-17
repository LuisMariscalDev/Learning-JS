// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para el resultado
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const dataBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  // Muestra los años al cargar


    // Llena las opciones de años
    llenarSelect()
})

// Event listener para los select de búsqueda
marca.addEventListener('change', e => {
    dataBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    dataBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    dataBusqueda.minimo = e.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', e => {
    dataBusqueda.maximo = e.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', e => {
    dataBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
})

transmision.addEventListener('change', e => {
    dataBusqueda.transmision = e.target.value;

    filtrarAuto();
})

color.addEventListener('change', e => {
    dataBusqueda.color = e.target.value;

    filtrarAuto();
})

// Funciones
function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio:  $ ${precio} - Color: ${color}
        
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Generar los años del select
function llenarSelect(){

    for( let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones del select
    }
}

// Funcion que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas).filter( filtrarTransmision).filter( filtrarColor );

    if( resultado.length){
        mostrarAutos(resultado);
    } else{
        noResultado();
    }

}

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No se encontró el auto, intenta con otros filtros de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = dataBusqueda;
    if( marca ) {
        return auto.marca == marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = dataBusqueda;
    if( year ) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = dataBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = dataBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = dataBusqueda;
    if( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = dataBusqueda;
    if( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = dataBusqueda;
    if( color ) {
        return auto.color === color;
    }
    return auto;
}