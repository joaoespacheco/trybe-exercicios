// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {

    return arrays.reduce((acc, crr) => acc.concat(crr));
  }

//   console.log(flatten())

// --------------------------------------------------------------------------

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// --------------------------------------------------------------------------

//   2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.map((livro) => livro.author['name']).reduce((acc, crr) => acc += `, ${crr}`) + '.';
}


// console.log(reduceNames())
// console.log(expectedResult2)
// console.log(reduceNames() === expectedResult2)

// --------------------------------------------------------------------------

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult3 = 43;

function averageAge() {
  return books.map((elemento) => elemento.releaseYear - elemento.author['birthYear']).reduce((acc, crr) => acc += crr) / books.length
}

// console.log(averageAge())

// --------------------------------------------------------------------------

// 4- Encontre o livro com o maior nome.


const expectedResult4 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
    return books.reduce((acc, crr) => ((acc.name.length > crr.name.length) ? acc : crr))
  }

//   console.log(longestNamedBook())

// --------------------------------------------------------------------------

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   function containsA() {
//     return names.reduce((acc, curr) =>
//        acc + curr.split('').reduce((acumulator, current) => {
//           if (current === 'a' || current === 'A') return acumulator + 1;
//           return acumulator;
//        }, 0), 0);
//   }

//   console.log(containsA())

  function containsA() {
      
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }

//   console.log(containsA())
//   console.log(names.reduce(((acc, curr) => acc + curr.split('').reduce(((acumulator, current) => current === 'a' || current === 'A' ? acumulator+=1 : acumulator),0)),''))

  // --------------------------------------------------------------------------

//   6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
  ];

  function studentAverage() {
    const nameAndAverage = students.map((student, index) => ({
      name: student,
      average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
    }));
    return nameAndAverage;
  }

console.log(studentAverage())