function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El Listado de Clientes se ha descargado correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// Async Await
// async function ejecutar() { y así se usa en function declaration
const ejecutar = async () => { // Así se usa el async await en function expression
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}
ejecutar();