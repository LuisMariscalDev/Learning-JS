const header = document.querySelector('.contenido-hero h1');
console.log(header);

// console.log(header.innerText); // si en el CSS está invisible no lo va a traer
// console.log(header.textContent); // este sí lo trae aunque esté invisible
// console.log(header.innerHTML); // Se trae todo el HTML

const nuevoHeading = 'New Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;



const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer3.jpg';