const paises = [];


function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`País agregado ${pais}`);
    callback();

}


function mostrarPaises() {
    console.log(paises);
}


function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();