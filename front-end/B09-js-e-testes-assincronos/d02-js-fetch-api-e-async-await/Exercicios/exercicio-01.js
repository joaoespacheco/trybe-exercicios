// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function appendHtml(piada) {
const jokeLocal = document.querySelector('#jokeContainer')
jokeLocal.innerText = piada;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    // .then(response => console.log(response))
    // .then(data => console.log(data));
    .then(data => appendHtml(data.joke));
    
};

window.onload = () => fetchJoke();
