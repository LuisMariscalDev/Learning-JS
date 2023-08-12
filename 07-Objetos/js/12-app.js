// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true
}

// Object Constructor 
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producta = new Producto('Keyboard', 100);
console.log(producta);

const producto3 = new Producto('Vaso Matraz', 520);
console.log(producto3);