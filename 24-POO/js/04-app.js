class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}


const apodo = new Cliente();
apodo.setNombre('Luis');
console.log(apodo.getNombre());