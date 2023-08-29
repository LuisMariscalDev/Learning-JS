//  Weakset

const weakset = new WeakSet();

const cliente = {
    nombre: 'Luis',
    saldo: 123
}


weakset.add(cliente);

// console.log(weakset.has('luis'));
// console.log(weakset.has(cliente));

// weakset.delete(cliente); // Elimina todo el objeto dentro del weakset

// console.log(weakset.size); // No existe el size en el weakset, es decir, no podemos ver cuantos valores tiene

console.log(weakset);