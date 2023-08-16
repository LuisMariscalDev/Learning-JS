window.addEventListener('scroll', () => {



    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();


    console.log(ubicacion);

    
    if(ubicacion.top < 700) {
        console.log('Ya puedes ver el elemento');
    } else {
        console.log('Da más Scroll');
    }
})