const aplicarDescuento = new Promise( (resolve, reject) =>{
    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado con éxito');
    } else {
        reject('No se aplicó el descuento');
    }
})

aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error))


// Hay 3 valores posibles
// fulfilled - El Promise se cumpió
// Rejected - El promise no se cumplió
// Pending - No se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje);
}