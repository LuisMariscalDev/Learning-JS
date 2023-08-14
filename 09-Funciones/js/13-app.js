
// Métodos con propiedad
const reproductor = {
    reproducir :  id => console.log(`Reproduciendo canción con el ID: ${id}`),
    pausar : () => console.log("Pausando canción..."),
    crearPlaylist : nombre => console.log(`Creando la Playlist: ${nombre}`),
    reproducirPlaylist :  nombre => console.log(`Reproduciendo Playlist ${nombre}`)
}
reproductor.borrarCancion = id => console.log(`Eliminando la canción: ${id}`);

reproductor.reproducir(123);
reproductor.pausar();
reproductor.borrarCancion(20)
reproductor.crearPlaylist("Corridos bélicos, plebe");
reproductor.reproducirPlaylist("de corridos");