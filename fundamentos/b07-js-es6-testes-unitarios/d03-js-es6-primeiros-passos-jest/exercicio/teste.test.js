const circle = require('./teste');



describe('4 - Implemente os casos de teste para a função `circle`', () => {
    it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
      // fail('Teste vazio!');
      expect(circle("a")).toBe(undefined);
      expect(circle(3)).toHaveProperty('circumference');
      expect(circle(5)).toHaveProperty('area', 78.5);
    });
  });