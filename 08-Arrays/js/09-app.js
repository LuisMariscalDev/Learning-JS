const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]

for ( let i = 0; i < carrito.length; i++) {
    console.log( `${carrito[i].nombre}  - Precio: ${carrito[i].precio}` );
}

console.log(" ")

carrito.forEach( function(p) {
    console.log(`${p.nombre} - Precio: ${p.precio}`)
})