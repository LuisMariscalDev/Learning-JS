// Explicit Binding...

function persona(ele1, ele2) {
    console.log(`Mi nombre es ${this.nombre} y me gusta escuchar ${ele1} y ${ele2}`);
}


const informacion = {
    nombre: 'Fermín'
}

const musicaFavorita = ['Corridos Tumbados', 'Jazz'];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);

nuevaFn();