const header = document.querySelector('h1');

// header.style.backgroundColor = 'grey';
// header.style.fontFamily = 'Roboto';
// header.style.textTransform = 'uppercase';


const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);