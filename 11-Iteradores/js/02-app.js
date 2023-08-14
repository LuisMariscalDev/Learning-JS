//  for( let i = 0; i <= 10; i++) {
//     if( i === 5) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }


const carrito = [
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Monitor', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Laptop', precio: 500},
    { nombre: 'Celular', precio: 600},
]

for( let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}