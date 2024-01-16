const cliente = {
    nombre: 'Luis Mariscal',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('El cliente se llama Luis', () => {
        expect(cliente.nombre).toBe('Luis Mariscal');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juanete');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
});