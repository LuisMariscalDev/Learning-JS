
const calificacion = 70;
const calificacion2 = "70";

console.log(typeof calificacion);
console.log(typeof calificacion2);

// if(calificacion != 71){ // el operador != es cuando queremos verificar si es diferente
//     console.log('En efecto, es diferente');
// }

if( calificacion !== "70") { // != diferente a y  == igual a
    console.log('Diferente');
} else {
    console.log('No diferente');
}

// == Este operador no es estricto
// === Este operador sí es estricto