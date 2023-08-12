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

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);