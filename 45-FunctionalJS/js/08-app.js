
const obtenerCliente = () => {
    const nombre = 'Luis Mariscal';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre();
}

const cliente = obtenerCliente();

cliente();