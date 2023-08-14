// Operador Mayor que y Menor que

const dinero = 100;
const totalAPagar = 300;
const cheque = false;
const tarjeta = false;

if( dinero >= totalAPagar ) {
    console.log('Pase a la caja registradora');
} else if(cheque){
    console.log('Pagaré con cheque');
}   else if(tarjeta) {
    console.log('Voy a pagar con tarjeta');
} else{
    console.log('Fondos Insuficientes');
}