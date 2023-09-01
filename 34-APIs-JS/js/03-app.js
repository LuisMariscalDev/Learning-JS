window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Sí tienes conexión');
    } else{
        console.log('No tienes conexión');
    }
}