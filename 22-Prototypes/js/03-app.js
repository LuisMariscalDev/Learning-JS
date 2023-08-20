function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'User';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo} y es de tipo ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(saldo) {
    this.saldo = saldo;
}


// Instanciarlo
const luis = new Cliente('Luis', 6000);
console.log(luis.tipoCliente());
console.log(luis.nombreClienteSaldo());
luis.retiraSaldo(1000);
console.log(luis.nombreClienteSaldo());

console.log(luis);
