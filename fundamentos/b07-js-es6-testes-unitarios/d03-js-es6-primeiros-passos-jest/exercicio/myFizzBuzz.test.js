const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da função myFizzBuzz', () => {
    test('Verificando o retorno da função', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('Abelha')).toBe(false);
    });
})