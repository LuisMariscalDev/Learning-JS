// Switch Case

const metodoPago = 'dollar';

switch(metodoPago) {
    case 'dollar' :
        pagar();
        break;
    case 'cheque' :
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta' :
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('No has pagado plebe');
        break;
}


function pagar() {
    console.log(`Pagaste con ${metodoPago}`);
}