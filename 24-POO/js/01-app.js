class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, su saldo actual es de: ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al hotel`;
    }
}

const luis = new Cliente('Luis', 6200);
console.log(luis.mostrarInformacion());
console.log(luis);

console.log(Cliente.bienvenida());

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, su saldo actual es de: ${this.saldo}`;
    }

}

const fer = new Cliente2('Wolburg', 999);
console.log(fer.mostrarInformacion())
console.log(fer);