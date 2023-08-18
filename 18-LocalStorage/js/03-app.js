const nombre = localStorage.removeItem('nombre');


// Actualizar un registro
const mesesArray = JSON.parse( localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Mayo');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));


localStorage.clear();