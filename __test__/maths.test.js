import { sumar, multiplicar, restar, dividir } from '../math.js'

describe('Calculos matemáticos', () =>{
    test('Prueba sumar', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Prueba multiplicación', ()=>{
        expect(multiplicar(2,2)).toBe(4)
    })
})