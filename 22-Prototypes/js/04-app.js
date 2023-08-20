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




function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
const luis = new Persona('Luis', 6000, 3221644347);
console.log(luis);
console.log(luis.nombreClienteSaldo);

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`;
}

console.log(luis.mostrarTelefono());