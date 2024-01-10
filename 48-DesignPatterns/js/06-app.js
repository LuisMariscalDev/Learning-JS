class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersonas = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersonas);
Object.assign(Cliente.prototype, funcionesPersonas);


const cliente = new Persona('Juan', 'luis@gmail.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Cliente', 'cliente@correo.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();