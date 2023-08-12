// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

producto.disponible = false;

delete producto.precio;

console.log(producto);

/*
    Aunque los objetos tengan el valor de const se pueden reasignar los valores
*/