
self.onload = () => {
    console.log('Ventana Lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto: ${self.nombre}`;
    }
}


console.log(producto.mostrarInfo());