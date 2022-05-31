
const verificador = (aposta, resultado) => {
    if (aposta === resultado) {
        return 'Parabéns você ganhou'
    } else {
        return 'Tente novamente'
    }

}

const geradorDeNumeros = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const verificadorDeApostas = (aposta) => {
    const sorteio = geradorDeNumeros(1, 5);
    console.log(sorteio)
    return verificador(aposta, sorteio);
}

console.log(verificadorDeApostas(3))