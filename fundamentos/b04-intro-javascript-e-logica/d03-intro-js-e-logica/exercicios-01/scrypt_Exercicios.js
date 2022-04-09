// ------------Exercicio 01-----------------
// crie um algoritmo que retorne o fatorial de 10


// let valor = 10;
// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//     fatorial *= index;
//     console.log("X", index)
// }
// console.log(fatorial);


// ------------Exercicio 02-----------------
// crie um algoritmo que retorne o fatorial de 10


// let word = "tryber";
// let inverse = [];
// for (let index = word.length - 1; index >= 0; index -= 1) {   
//     inverse = inverse + word[index];
// }
// console.log(inverse);

// -----OU-----

// let word = 'tryber';
// let reverseWord = '';
// reverseWord = word.split('').reverse().join('');
// console.log(reverseWord);


// ------------Exercicio 03-----------------
// Escreva dois algoritmos: um que retorne a maior palavra deste 
// array e outro que retorne a menor. Considere o número de caracteres 
// de cada palavra.


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = "";
// let menorPalavra = array[0];
// for (let index = 0; index < array.length ; index += 1) {
//     if (maiorPalavra.length < array[index].length) {
//         maiorPalavra = array[index];
//     }
// }
// for (let index = 0; index < array.length ; index += 1) {
//     if (menorPalavra.length > array[index].length) {
//         menorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra);
// console.log(menorPalavra);


// ------------Exercicio 04-----------------
// Um número primo é aquele divisível apenas por 1 e 
// por ele mesmo. Sabendo disso, escreva um algoritmo 
// que retorne o maior número primo entre 0 e 50.


// let numerosPrimos = [];
// let maiorPrimo = "";
// for (let index = 0; index < 51 ; index += 1) {
//      if (index % 2 !== 0 && index % 3 !== 0) {
//          numerosPrimos.push(index);
//      }
// }
// for (let index = 0; index < numerosPrimos.length; index += 1) {
//     if (maiorPrimo < numerosPrimos[index]) {
//         maiorPrimo = numerosPrimos[index];
//     }
// }
// console.log(numerosPrimos);
// console.log(maiorPrimo)

// -----OU-----

// let biggestPrimeNumber = 0;
// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }
// console.log(biggestPrimeNumber);