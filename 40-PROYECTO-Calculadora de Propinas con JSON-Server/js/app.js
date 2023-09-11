let cliente = {
    mesa: '',
    cliente: '',
    pedido: []
}

const categorias = {
    1: 'Comida',
    2: 'Bebida',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Resvisar si hay campos vacíos
    const camposVacios = [mesa, hora].some( campo => campo === '' );

    if(camposVacios) {
        // Verificar si no hay otra alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            //Eliminar la alerta después de 3 segundos
            setTimeout(() => {
                alerta.remove()
            }, 3000);
        }

        return
    } 

    // Asignar datos del formulario al objeto cliente
    cliente = { ...cliente, mesa, hora}

    // Ocultamos el modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // Mostrat las secciones
    mostrarSecciones();

    //Obtener platillos de la API de JSON-Server
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos(){
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch()
}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach( platillo => {
        const row = document.createElement('div');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[ platillo.categoria ];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        // Función que detecta la cantidad y el platillo que se está agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt( inputCantidad.value );
            agregarPlatillo({...platillo, cantidad});
        }

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
}

function agregarPlatillo(producto) {
    // Extraer el pedido actual
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0) {
       
        // Comprueba si el elemento ya existe en el carrito
        if( pedido.some( articulo => articulo.id === producto.id)) {
            // El articulo ya existe, actualicemos la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if( articulo.id === producto.id ){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            // El articulo no existe, lo agregamos al array del pedido
            cliente.pedido = [...pedido, producto];
        }
    } else {
        // Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];
    }

    // Mostrar resumen
    actualizarResumen();
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido')

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6');

    // Información de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Información de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');
    
    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    // Agregar contenido a los elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    contenido.appendChild(mesa);
    contenido.appendChild(hora);
}