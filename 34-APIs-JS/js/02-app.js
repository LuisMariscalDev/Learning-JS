// Previamente vimos getClientRect, que nos permitía identificar cuando un elemento estaba visible,
// existe otra API llamada Intersection Observer, veamos como utilizarla

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {

        if(entries[0].isIntersecting) {
            console.log('Ya está visible');
        } else {
            console.log('No está visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
})