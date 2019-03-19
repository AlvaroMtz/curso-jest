import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobar si existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Comprobamos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});

describe('Comprobar tamaño de un arreglo', () => {
    test('Tamaño del arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
});