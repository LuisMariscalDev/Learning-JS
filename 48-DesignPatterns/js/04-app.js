// Factory - Crea objetos basados en ciertas condiciones

class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
    }
}

class HTMLFactory {
    crearElemento(type, name) {
        switch(type) {
            case 'text':
                return new InputHTML('text', name)

            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());