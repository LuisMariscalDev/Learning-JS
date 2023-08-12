// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = "foto.webp";

// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);