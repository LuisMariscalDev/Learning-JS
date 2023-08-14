const auth = true;

if(auth) {
    console.log('El usuario está autenticado');
}

const puntaje = 450;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente mi pa');
        return;
    }

    if(puntaje > 300) {
        console.log('Vas muy bien rey');
        return;
    }
}

revisarPuntaje();