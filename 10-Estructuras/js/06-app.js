const user = false;
const pay = true;

if(user && pay) {
    console.log('Sí puede comprar');
} else if(!pay && !user) {
    console.log('No puedes comprar');
} else if(!user) {
    console.log('Inicia sesión o crea una cuenta nueva');
} else if (!pay) {
    console.log('Fondos Insuficientes');
}