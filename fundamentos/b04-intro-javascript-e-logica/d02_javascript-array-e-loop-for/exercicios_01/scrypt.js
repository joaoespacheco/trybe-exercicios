let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// --------------------- 1º EXERCÍCIO -------------------------

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// ------------------------ 2º EXERCÍCIO --------------------------

// let resultadoSoma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultadoSoma = resultadoSoma + numbers[index];
//     console.log("Operação:" , resultadoSoma - numbers[index], "+" , numbers[index] , "=" , resultadoSoma);
// }
// console.log("Total:" , resultadoSoma)

// ------------------------ 3º EXERCÍCIO --------------------------

// let resultadoSoma = 0;
// let mediaAritmetica = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultadoSoma = resultadoSoma + numbers[index];
// }

// mediaAritmetica = resultadoSoma / numbers.length;
// console.log("Soma dos elemetos:" , resultadoSoma);
// console.log("Número de elementos:" , numbers.length);
// console.log("Média aritmética:" , mediaAritmetica);

// ------------------------ 4º EXERCÍCIO --------------------------

// let resultadoSoma = 0;
// let mediaAritmetica = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultadoSoma = resultadoSoma + numbers[index];
// }

// mediaAritmetica = resultadoSoma / numbers.length;
// console.log("Soma dos elemetos:" , resultadoSoma);
// console.log("Número de elementos:" , numbers.length);
// console.log("Média aritmética:" , mediaAritmetica);
// if (mediaAritmetica > 20) {
//     console.log("'Valor maior que 20'")
// } else {
//     console.log("'Valor menor que 20'")
// }

// ------------------------ 5º EXERCÍCIO --------------------------

// let maiorValor = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[index] > maiorValor) {
//             maiorValor = numbers[index];
//         }
//     }
//     console.log(maiorValor);

            // ----- OU -----

// let higherNumber = 0;
// for (let index of numbers) {
//     if (index > higherNumber) {
//         higherNumber = index;
//     }
// }

// console.log(higherNumber);

// ------------------------ 6º EXERCÍCIO --------------------------

// let numerosImpares = 0;
// let numerosPares = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 === 0 ) {
//         numerosPares = numerosPares + 1;
//     }
// }

// numerosImpares = numbers.length - numerosPares;

//     console.log(numerosImpares);

// ------------------------ 7º EXERCÍCIO --------------------------

// let menorValor = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (menorValor >= numbers[index]) {
//       menorValor = numbers [index];
//   }
// }
//     console.log(menorValor);

    // ----OU-----

// let smallestNumber = numbers[0]
// for (let index of numbers) {
//     if (index < smallestNumber) {
//         smallestNumber = index;
//     }
// }

// console.log(smallestNumber);

// ------------------------ 8º EXERCÍCIO E 9º EXERCÍCIO --------------------------

let arrayNumbers = [];
for (index = 1; index < 26; index += 1) {
     arrayNumbers.push(index);
}

console.log(arrayNumbers);

for (index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = arrayNumbers[index] / 2;
}

console.log (arrayNumbers);