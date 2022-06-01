const uppercase = require('./Exercicio-07');


it('Verifica se a função retorna a string em uppercase', (done) => {
    uppercase('test', (str) => {
        try {
            expect(str).toBe('TEST');
            done();
        } catch (error) {
            done(error);
        }
    });
});
