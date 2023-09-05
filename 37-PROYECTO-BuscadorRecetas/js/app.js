function iniciarApp() {

    const resultado = document.querySelector('#resultado');
    const selectCategoria = document.querySelector('#categorias');

    if(selectCategoria ) {
        selectCategoria.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv) {
        obtenerFavoritos();
    }


    const modal = new bootstrap.Modal('#modal', {});

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach( categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('option');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategoria.appendChild(option);
        })
    } 

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados': 'No se hallaron resultados';
        resultado.appendChild(heading);
        
        // Iterar en los resultados
        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta de ${strMeal} ?? receta.titulo`;
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('h3');
            recetaHeading.classList.add('card-tittle', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('button');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal);
            }

            // Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        })
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta) {

        const { idMeal, strInstructions, strMeal, strMealThumb} = receta;

        // Añadir el contenido al modal
        const modalTittle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTittle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
            <h3 class="my-3"></h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group');
        // Mostrar cantidades e ingredientes
        for(let i = 1; i <= 20; i++) {
            if(receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('li');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        // Botones de cerrar y favoritos
        const btnFav = document.createElement('button');
        btnFav.classList.add('btn', 'btn-danger', 'col');
        btnFav.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        // Almacenar en localstorage
        btnFav.onclick = function() {

            if(existeStorage(idMeal)) {
                eliminarFavorito(idMeal);
                btnFav.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');
                return;
            } 

             
            agregarFavorito({
                id: idMeal,
                title: strMeal,
                img: strMealThumb
            })
            btnFav.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente');
        }

        const btnClose = document.createElement('button');
        btnClose.classList.add('btn', 'btn-secondary', 'col');
        btnClose.textContent = 'Cerrar';
        btnClose.onclick = function() {
            modal.hide();
        }

        modalFooter.appendChild(btnFav);
        modalFooter.appendChild(btnClose);

        // Mostrar el modal
        modal.show();
    }

    function agregarFavorito(receta) {
        const favs = JSON.parse(localStorage.getItem('favs')) ?? [];
        localStorage.setItem('favs', JSON.stringify([...favs, receta]))
    }

    function eliminarFavorito(id) {
        const favs = JSON.parse(localStorage.getItem('favs')) ?? [];
        const nuevoFav = favs.filter(fav => fav.id !== id);
        localStorage.setItem('favs', JSON.stringify(nuevoFav));
    }

    function existeStorage(id) {
        const favs = JSON.parse(localStorage.getItem('favs')) ?? [];
        return favs.some(favs => favs.id === id);
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length) {
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('p');
        noFavoritos.textContent = 'No hay favoritos';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }

    function limpiarHTML(selector) {
        while(selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);

