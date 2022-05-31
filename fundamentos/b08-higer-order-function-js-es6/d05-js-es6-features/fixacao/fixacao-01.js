// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'goiaba', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'manga', 'uva'];

const fruitSalad = (fruit, additional) => {
  let listaCompleta = [...fruit, ...additional];
  return listaCompleta
};

console.log(fruitSalad(specialFruit, additionalItens));