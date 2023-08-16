const enlace = document.createElement('A');

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

// Añandiendo el href
enlace.href = 'google.com';


enlace.target = '_blank';

enlace.setAttribute('data_enlace', 'nuevo-enlace');

enlace.classList.add('xd');

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear un CARD
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Baile de Grupo Frontera';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Baile de Banda';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$4000 por mesa';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('DIV');
card.classList.add('card');

// Asingar la imagen
card.appendChild(imagen);

// Asignar la info
card.appendChild(info);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[2]);