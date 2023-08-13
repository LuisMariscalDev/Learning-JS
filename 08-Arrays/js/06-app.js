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

const producto3 = {
    nombre: "Xbox",
    precio: 1500
}

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [producto2, ...resultado];


console.table(resultado);