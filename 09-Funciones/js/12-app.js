const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]


const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`);
const nuevoArreglo2 = carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);