    // 1. Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

    // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// const pai = document.getElementById('elementoOndeVoceEsta').parentNode;
// OU
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';
console.log(pai)

    // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Adicionando um texto qualquer';

    // 4. Acesse o primeiroFilho a partir de pai .

const primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

    // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primeiroFilho1 =  elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho1)

    // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const textoAtencao = elementoOndeVoceEsta.nextSibling;
console.log(textoAtencao);

    // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho)

    // 8. Agora acesse o terceiroFilho a partir de pai.

const terceiroFilho1 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho1);
