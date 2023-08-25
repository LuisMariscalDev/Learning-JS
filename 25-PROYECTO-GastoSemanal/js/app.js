// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto)
}


// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];
    }
}

class UI {
    insertarPresupuesto( cantidad ){
        // Extrayendo valores
        const { presupuesto, restante} = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear el div de alerta
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            mensajeDiv.classList.add('alert-danger');
        } else {
            mensajeDiv.classList.add('alert-success');
        }

        //Mensaje de error
        mensajeDiv.textContent = mensaje;

        // Insertar en el HTML

        document.querySelector('.primario').insertBefore( mensajeDiv, formulario);

        // Quitar del HTML
        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }
}


// Instanciar 
const ui = new UI();
let presupuesto;

// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es su presupuesto?');

    // console.log( Number(presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}


// Añade gastos
function agregarGasto(e) {
    e.preventDefault();


    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if( cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('La cantidad no es válida', 'error');

        return;
    }
}