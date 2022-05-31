const sum = require('./sum');

describe('a função sum()', () => {

    test('Retorna valor da soma', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    });

    test('Deve disparar erro quando um parametro for string', () => {
        expect(() => {sum(4,'5')}).toThrowError();
        expect(() => {sum(4,'5')}).toThrowError('parameters must be numbers');
    });
});