// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Learn JavaScript'];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]

const newArray = carrito.forEach( producto => producto.nombre);

const newArray2 = carrito.map( producto => producto.nombre);

console.log(newArray);
console.log(newArray2);