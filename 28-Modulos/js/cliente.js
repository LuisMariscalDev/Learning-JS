export const clienteNombre = 'Luis';
export const ahorro = 2360;


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}


export function tieneSaldo(ahorro) {
    if( ahorro > 0) {
        console.log('Sí tiene ahorro');
    } else {
        console.log('No has ahorrado');
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export default');
}