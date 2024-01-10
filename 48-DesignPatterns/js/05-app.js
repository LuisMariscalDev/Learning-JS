// Module Pattern

const modulo1 = (function() {
    const nombre = 'Luis';

    function hola() {
        console.log('hola');
    }

    return {
        nombre,
        hola
    }
})();