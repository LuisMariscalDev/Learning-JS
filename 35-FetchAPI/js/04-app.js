const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarHTML( resultado))
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url, id } = perfil;

        html += `
            <p>Autor: ${author}</p>
            <p>ID: ${id}</p>
            <a href="${post_url}" target="blank">Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}