const ciudades = ['Londres', 'Nueva York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 222, 321, 987]);
const datos = new Map();

datos.set('nombre', 'Luis');
datos.set('profesión', 'desarrollador');

// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

// Keys Iterator
// for(let keys of ciudades.keys()) {
//     console.log(keys);
// }

// for(let keys of ordenes.keys()) {
//     console.log(keys);
// }

// for(let keys of datos.keys()) {
//     console.log(keys);
// }

// Values Iterator
// for(let value of ciudades.values()) {
//     console.log(value);
// }

// for(let value of ordenes.values()) {
//     console.log(value);
// }

// for(let value of datos.values()) {
//     console.log(value);
// }

// Entries Iterator
// for(let entry of ciudades) {
//     console.log(entry);
// }

// for(let entry of ordenes) {
//     console.log(entry);
// }

// for(let entry of datos) {
//     console.log(entry);
// }