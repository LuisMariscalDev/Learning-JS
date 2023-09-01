const paises = [];

const nuevoPais = pais => new Promise ( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`El país agregado es: ${pais}`);
    }, 3000);
})


nuevoPais('Portugal')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        console.log(resultado);
    })