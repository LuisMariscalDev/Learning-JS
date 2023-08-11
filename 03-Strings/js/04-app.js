const producto = "                  Monitor 20 pulgadas            ";


console.log(producto);
console.log(producto.length);

// Eliminar espacios en blanco al inicio del enunciado
console.log(producto.trimStart());
// Eliminar espacios en blanco al final del enunciado
console.log(producto.trimEnd());

// Concatenamos las funciones para eliminar el espacio al inicio y al final
console.log(producto.trimStart().trimEnd());

// Usamos solo trim para eliminar de ambos lados
console.log(producto.trim());