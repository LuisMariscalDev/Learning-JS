

const efectivo = 200;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible >= totalPagar) {
    console.log('Pase a la caja registradora');
} else {
    console.log('Fondos Insuficientes');
}