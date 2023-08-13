const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Cuanto mide el arreglo
console.log(meses.length);

// For Loop
for ( let i = 0; i < meses.length; i++) {
    console.log( meses[i] );
}