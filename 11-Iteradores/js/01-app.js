// for( let i = 0; i <= 10; i++) {
//     console.log(`Numeros ${i}`)
// }


// for( let i = 0; i <= 20; i++ ) {
//     if( i % 2 === 0) {
//         console.log(`El número ${i} es PAR`)
//     } else {
//         console.log(`El numero ${i} es IMPAR`)
//     }
// }


const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]

console.log(carrito.length);

for( let i = 0; i <carrito.length; i++) {
    console.log(carrito[i].nombre)
}