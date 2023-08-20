const cliente = {
    nombre: 'Luis',
    saldo: 600
}

console.log(cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const yop = new Cliente('Antuan', 620);

console.log(yop);