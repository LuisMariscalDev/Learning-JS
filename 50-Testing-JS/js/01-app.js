// Probar 2 valores

function sumar(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = sumar(2,2);
let esperado = 4;

if(resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado`);
} else {
    console.log(`La prueba corrió sin problema`);
}

resultado = restar(100,5);
esperado = 5;

if(resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado`);
} else {
    console.log(`La prueba corrió sin problema`);
}