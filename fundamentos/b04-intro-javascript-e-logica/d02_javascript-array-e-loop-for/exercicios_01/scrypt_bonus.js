
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
// MULTIPLICA

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplicacao = [];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] == numbers[secondIndex + 1]) {
//         multiplicacao.push(numbers[index]*numbers[secondIndex]);
//       }
//     }
// }
// multiplicacao.push(numbers[numbers.length -1]*2);

//   console.log(multiplicacao);

// -----OU-----

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplicados = [];
// for(let index = 0; index < numbers.length; index += 1) {
//   if(index === (numbers.length - 1)) {
//     multiplicados.push(numbers[index] * 2);
//   } else {
//     multiplicados.push(numbers[index] * numbers[index + 1]);
//   }
// }
// console.log(multiplicados);

// -----OU-----

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//     newArray.push(numbers[index] * numbers[index + 1]);
//   } else {
//     newArray.push(numbers[index] * 2);
//   }
// }

// console.log(newArray);