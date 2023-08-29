const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');




carrito.delete('Camisa');
console.log(carrito.size);

console.log(carrito.has('Guitarra'));

// carrito.clear();

carrito.forEach(producto => {
    console.log(producto);
})
// console.log(carrito);

// Del siguiente arreglo trae los numeros sin duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplex = new Set(numeros);

console.log(noDuplex);
