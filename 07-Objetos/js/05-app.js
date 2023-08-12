// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1KG",
            medida: "1 Metro"
        },
        fabricacion: {
            pais: "china",
        }
    }
}

console.log(producto);
console.log(producto.informacion.fabricacion.pais);