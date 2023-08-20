function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const yop = new Cliente('Luis', 620);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría de '${categoria}'`;
}

console.log( formatearCliente(yop) );

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('LuisDev', 5620, 'Programación');
console.log( formatearEmpresa(CCJ));