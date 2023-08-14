
iniciarApp();


function iniciarApp() {
    console.log('Iniciando App');

    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función');

    userAuth('Luis');
}


function userAuth(user) {
    console.log('Autenticando usuario, por favor espere...');
    console.log(`Usuario autenticado con éxito, bienvenido ${user}`);
}
