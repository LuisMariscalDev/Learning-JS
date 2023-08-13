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

// .push agrega al final del arreglo

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Xbox",
    precio: 1500
}

carrito.unshift(producto3);

console.table(carrito);