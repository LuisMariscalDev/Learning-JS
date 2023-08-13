const carrito = [];

// Definir un producto
const producto = {
    nombre: "TV",
    precio: 5550
}

const producto2 = {
    nombre: "Celular",
    precio: 999
}
const producto4 = {
    nombre: "iPad",
    precio: 4999
}

// .push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "Xbox",
    precio: 1500
}

carrito.unshift(producto3);
console.table(carrito)

// Eliminar el último elemento de un arreglo...
// carrito.pop();
// console.table(carrito);

// // Eliminar el primer elemento de un arreglo...
// carrito.shift();
// console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);