// Probar 2 valores

function sumar(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = sumar(2,2);
let esperado = 4;

expected(esperado).toBe(resultado);

resultado = restar(10,4);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

function expected( esperado ) {
    return {
        toBe ( resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} es diferente a lo esperado`);
            } else {
                console.log(`La prueba corrió sin problema`);
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} es diferente a lo esperado`);
            } else {
                console.log(`La prueba corrió sin problema`);
            }
        }
    }
}