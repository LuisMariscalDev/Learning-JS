function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos la subasta con un precio de ${precio}`);
    },
    Vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}


function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar : usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos
const luis = new Comprador('Luis');
const daniel = new Comprador('Daniel');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(luis);
subasta.registrar(daniel);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 350);

luis.oferta(400, luis);
daniel.oferta(420, daniel);
luis.oferta(550, luis);

vendedor.Vendido('Luis');