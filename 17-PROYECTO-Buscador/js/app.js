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
    mostrarAutos();  // Muestra los años al cargar


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
})

maximo.addEventListener('change', e => {
    dataBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    dataBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    dataBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    dataBusqueda.color = e.target.value;

    console.log(dataBusqueda);
})

// Funciones
function mostrarAutos() {
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
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear);

    console.log(resultado)
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
        return auto.year == year;
    }
    return auto;
}