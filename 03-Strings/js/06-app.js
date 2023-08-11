const producto = "Monitor 20 pulgadas";

// .repeat te va a permitir repetir una cadena de texto...
const texto = ' en Promoción'.repeat(2.6); // en caso de poner un numero decimal .repeat va a redondear el numero

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split se usa para dividir un string

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo a programar JavaScript con #JSModernoConJuan';
console.log(tweet.split("#"));