const auto = {
    model: 'Camaro',
    year: '1964',
    motor: '4.5'
}

// for( let propiedad in auto) {
//     console.log(`${auto[propiedad]}`);
// }

for( let [llave, valor] of Object.entries(auto)){
    console.log(llave);
    console.log(valor);
}