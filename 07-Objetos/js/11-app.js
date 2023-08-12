// Object literal
const producto = {
    nombre: "Monitor Curvo 70\"",
    precio: 2500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();