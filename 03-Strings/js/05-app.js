const producto = "Monitor 20 pulgadas";

// .replace para reemplazar una palabra por otra
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar de un lugar a otro
console.log(producto.slice(0, 10)); // aquí solo muestra del caracter 0 al 10, lo demás lo corta
console.log(producto.slice(8)); // aquí muestra solamente del caractero 8 en adelante
console.log(producto.slice(2, 1)); // aquí no muestra nada, por listo


// .substring alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));// aquí si muestra algo porque invierte los valores cuando el primero es mayor que el segundo


const user = "Luis";
console.log(user.substring(0,1)); //Muestra la primer letra por los valores que le asignas
console.log(user.charAt(0));//Muestra solo el caracter en la posición que colocaste