// Constructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Luis', 'correo@gmail.com');
console.log(persona);

const cliente = new Cliente('Daniela', 'cliente@cliente.com', 'Programa con Luis');
console.log(cliente);