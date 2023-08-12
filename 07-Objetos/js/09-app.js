"use strict";

// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

Object.seal(producto);

/*
    La diferencia entre Seal y Freeze, es que Freeze inmoviliza por completo al objeto, mientras que Seal
    te permite solamente modificar las propiedades que ya están dentro del objeto, no te permite agregar ni
    eliminar propiedades
*/

producto.disponible = false;
// producto.imagen = "foto.jpg";
// delete producto.precio;

console.log(producto);

// console.log(Object.isFrozen(producto));