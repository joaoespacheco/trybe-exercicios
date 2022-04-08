
// ------------ EXERCICIO 01 -----------------
// ORDEM CRESCENTE

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [3, 1, 2, 6, 4, 5, 10, 9, 7, 8];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);

// ------------ EXERCICIO 02 -----------------
// ORDEM DECRESCENTE

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [3, 10, 2, 6, 4, 5, 1, 9, 7, 8];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);


// ------------ EXERCICIO 03 -----------------
// ORDEM DECRESCENTE
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacao = [];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] == numbers[secondIndex+1]) {
        multiplicacao.push(numbers[index]*numbers[secondIndex]);
      }
    }
  }

  console.log(multiplicacao);