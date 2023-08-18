localStorage.setItem('nombre', 'luis');

const producto = {
    nombre: 'Monitor 24 Pulgadas',
    precio: 5200
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
localStorage.setItem('meses', JSON.stringify(meses));