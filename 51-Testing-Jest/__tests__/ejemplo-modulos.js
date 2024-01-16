import {sumara} from '../js/funciones.js';

describe('Suma de dos números', () => {
    test('Sumar 10 y 20', () => {
        expect(sumara(10,20)).toBe(30);
    });
})