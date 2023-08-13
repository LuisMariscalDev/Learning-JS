// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring de arreglos
const numeros = [10,20,30,40,50];

const [primero, ...segundo] = numeros;

console.log(segundo);