// Singleton

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Luis', 'correo@gmail.com');
console.log(persona);

const persona2 = new Persona('luisa', 'correo@gmail.com');
console.log(persona);