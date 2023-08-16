const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('Doble click en la navegación');
    nav.style.backgroundColor = 'white';
})