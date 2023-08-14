
function sumar(a, b) {
    return a + b;
}

const resultado = sumar (5, 5);

console.log(resultado);


// Ejemplo más avanzado

let total = 0;
function addCar(price) {
    return total += price;
}
function calculateTaxes(total) {
    return total * 1.16;
}

total = addCar(300);
total = addCar(100);
total = addCar(600);

const totalPay = calculateTaxes(total);

console.log(`El total a pagar es: ${totalPay}`);

console.log(total);