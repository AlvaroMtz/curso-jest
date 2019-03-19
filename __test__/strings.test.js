import { exportAllDeclaration } from "@babel/types";

describe('Comprobar cadenas de texto', () => {
    const text = 'un bonito texto';
    test('dede contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('no contiene el siguiente texto', () => {
        expect(text).not.toMatch(/es/)
    });
    test('comprobar la longitud de un texto', () => {
        expect(text).toHaveLength(15);
    });
});