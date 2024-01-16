const cliente = {
    name: 'Luis',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Luis', () => {
        expect(cliente).toMatchSnapshot();
    });
});