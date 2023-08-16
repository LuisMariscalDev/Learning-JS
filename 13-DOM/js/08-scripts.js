const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion); 
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Solo te trae las etiquetas HTML


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the DOM';

// card.children[0].src = 'img/hacer4.jpg';
// console.log(card.children[0]);


// Traversing desde el hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement.parentElement);


// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const lastCard = document.querySelector('.card:nth-child(4)');
// console.log(lastCard.previousElementSibling);