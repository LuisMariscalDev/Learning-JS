const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('Falló la validación')
    }
    console.log(e.target.value);
})