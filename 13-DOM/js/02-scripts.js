// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);


const hero = document.getElementsByClassName('hero');
console.log(hero);


// Si las clases existen más de 1 vez...
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si la clase llamada no existe...
const nothing = document.getElementsByClassName('nadie');
console.log(nothing);