"use strict";

// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "foto.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));