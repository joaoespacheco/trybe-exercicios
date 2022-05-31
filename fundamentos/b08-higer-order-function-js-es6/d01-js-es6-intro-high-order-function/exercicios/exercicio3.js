// Aleatório
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const resposta = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// tudo certo
const gabarito1 = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E', 'F'];
const resposta1 = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E', 'F'];
// nada certo
const gabarito2 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const resposta2 = ['B', 'D', 'A', 'C', 'B', 'E', 'C', 'B', 'E', 'A'];
// nenhuma resposta
const gabarito3 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const resposta3 = ['N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A'];

const verificadorDeRespostas = (gabarito, resposta) => {
    let notas = 0;
    for (let index = 0; index < gabarito.length; index +=1){
        if (resposta[index] === 'N.A'){} 
        else if (gabarito[index] === resposta[index]){
            notas += 1;
        } else {
            notas -= 0.5;
        }
    }
    return notas
}

const hof = (gabarito1, resposta1, callback) => {
return `Sua nota foi de: ${callback(gabarito1,resposta1)} pontos`;
}

console.log(hof(gabarito,resposta,verificadorDeRespostas))
console.log('-------------------------------------------')
console.log(hof(gabarito1,resposta1,verificadorDeRespostas))
console.log('-------------------------------------------')
console.log(hof(gabarito2,resposta2,verificadorDeRespostas))
console.log('-------------------------------------------')
console.log(hof(gabarito3,resposta3,verificadorDeRespostas))
console.log('-------------------------------------------')