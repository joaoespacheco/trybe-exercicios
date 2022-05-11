let estiloBody = document.querySelector('body');

addEventListener('click' , function (){
    if (event.target === document.getElementById('tema-01')) {
        estiloBody.id = 'estilo-01';
    }
    if (event.target === document.getElementById('tema-02')) {
        estiloBody.id = 'estilo-02';
    }
    if (event.target === document.getElementById('tema-03')) {
        estiloBody.id = 'estilo-03';
    }
})


let tamanhoDaFonte = document.getElementById('tamanho-da-fonte');

addEventListener('click', function (){
    if (event.target === document.getElementById('aumenta-fonte')){
        let elemento = document.querySelector('html');
        let estilos = window.getComputedStyle(elemento, null);
        let tamanho = estilos.getPropertyValue('font-size');
        console.log(tamanho)
        tamanho = parseInt(tamanho) + 1;
        tamanhoDaFonte.style.fontSize = tamanho+'px' ;
    }
    if (event.target === document.getElementById('diminui-fonte')){
        let elemento = document.querySelector('html');
        let estilos = window.getComputedStyle(elemento, null);
        let tamanho = estilos.getPropertyValue('font-size');
        console.log(tamanho)
        tamanho = parseInt(tamanho) - 1;
        tamanhoDaFonte.style.fontSize = tamanho+'px' ;
    }

})

addEventListener('click', function (){
    if (event.target === document.getElementById('aumenta-linha')){
        let elemento1 = document.querySelector('html');
        let estilos1 = window.getComputedStyle(elemento1, null);
        let tamanho1 = estilos1.getPropertyValue('line-height');
        console.log(tamanho1)
        tamanho1 = parseInt(tamanho1) + 1;
        tamanhoDaFonte.style.lineHeight = tamanho1+'px' ;
    }
    if (event.target === document.getElementById('diminui-linha')){
        let elemento1 = document.querySelector('html');
        let estilos1 = window.getComputedStyle(elemento1, null);
        let tamanho1 = estilos1.getPropertyValue('line-height');
        console.log(tamanho1)
        tamanho1 = parseInt(tamanho1) - 1;
        tamanhoDaFonte.style.lineHeight = tamanho1+'px' ;
    }

})