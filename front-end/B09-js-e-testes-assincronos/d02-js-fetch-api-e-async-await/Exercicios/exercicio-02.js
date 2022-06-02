const API_URL = 'https://api.coincap.io/v2/assets';

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);
    const usdCurrencies = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.usd)
        .catch((error) => error.toString());
    return usdCurrencies;
};

function appendHtml(data, {brl}) {
    const lista = document.querySelector('#lista-cripto');
    for (let index = 0; index < 10; index += 1) {
        const { id, symbol, priceUsd } = data[index];
        const price = (parseFloat(priceUsd) * brl).toFixed(2);
        const linhaDalista = document.createElement('li');
        linhaDalista.innerText = `${id} (${symbol}): R$ ${price}`;
        lista.appendChild(linhaDalista);
    }
}

async function fetchCrypto() {
    const myObject = {
        method: 'GET',
        Headers: { 'Accept-Encoding': 'gzip' }
    }
    try {
        const response = await fetch(API_URL, myObject);
        const data = await response.json();
        const usdToBrl = await fetchUsdCurrencies()
        appendHtml(data.data, usdToBrl)
    }
    catch (error) {
        console.log(error);
    }
}

window.onload = () => fetchCrypto();
