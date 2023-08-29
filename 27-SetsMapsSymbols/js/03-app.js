
const  cliente = new Map();

cliente.set('Nombre', 'Luis');
cliente.set('Tipo', 'Visitante');
cliente.set('Saldo', 999);


console.log(cliente.size);

console.log(cliente.has('Nombre')); // Es sensible a las mayusculas y minusculas y te regresa true o false
console.log(cliente.get('Nombre')); // Es sensible a las mayusculas y minusculas y te regresa el valor de la variable

cliente.delete('saldo');

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

cliente.clear(); // limpia el map




console.log(cliente);


const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no asignado'] ] );

paciente.set('dr', 'Dr Asignado');
paciente.set('nombre', 'Antuan');

console.log(paciente);

paciente.forEach( (datos, index) => {
    // console.log(datos);
    console.log(index);
})