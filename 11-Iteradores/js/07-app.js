const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Learn JavaScript'];

const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]

for( let pendiente of pendientes) {
    console.log(pendiente);
}

for( let producto of carrito) {
    console.log(producto.nombre);
}