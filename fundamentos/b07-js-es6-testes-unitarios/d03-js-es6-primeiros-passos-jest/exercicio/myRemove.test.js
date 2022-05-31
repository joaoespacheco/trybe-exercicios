const myRemove = require('./myRemove');

describe('Teste da função myRemove', () => {

    test('verifica o retorno do arrays inseridos', () => {
        let array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
        expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });
});