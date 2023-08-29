const sym = Symbol('1');
const sym2 = Symbol('2');

// console.log( Symbol() === Symbol());


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto (persona)
persona[nombre] = 'Luis';
persona[apellido] = 'Mariscal';
persona.tipoCliente = 'Platinum';
persona.saldo = 9999;


console.log(persona);
// console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i); // por eso aquí solo nos muestra el tipo de cliente y el saldo, porque no son Symbol()
}


// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del cliente');

const cliente = {};

cliente[nombreCliente] = 'Antuan';


console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);