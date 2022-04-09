// ----------EXERCICIO-01----------
// Agora vamos trabalhar com algumas formas geométricas! 
// Faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado 
// de tamanho n.

let n = 5;
let asterisco = "";

for (let index = 0; index <= n; index += 1) {
for (let index = 0; index < n; index += 1) {
  if (asterisco.length !== n)
    asterisco = asterisco + "*";
}
console.log(asterisco);
}

// ----------EXERCICIO-02----------
// Para o segundo exercício, faça o mesmo que antes, mas que 
// imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let asterisco = "";

// for (let index = 0; index <= n; index += 1) {
//     asterisco = asterisco + "*";
//     console.log(asterisco);
// }

// ----------EXERCICIO-03----------

