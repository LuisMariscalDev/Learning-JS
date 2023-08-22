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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al hotel de la empresa`;
    }
}


const luis = new Cliente('Luis', 6200);
const empresa = new Empresa('LuisDev', 6000, 3221644347, 'Programación e ingeniería');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());