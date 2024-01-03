// Implicit Blinding


const usuario = {
    nombre: 'Luis',
    edad: 22,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Terry',
        edad: 4,
        informacion() {
            console.log(`Y mi perro se llama ${this.nombre} y tiene conmigo ${this.edad} años`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();