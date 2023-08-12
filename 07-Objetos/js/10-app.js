// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "2cm"
}


console.log(producto);
console.log(medidas);

// Method Assing
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}; // Se usa más esta

console.log(resultado);
console.log(resultado2);