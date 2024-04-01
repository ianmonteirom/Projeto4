function calc() {
    //DECLARANDO AS VARIÁVEIS
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let res = document.querySelector('#resultado');
    res.innerHTML = num1 * num2;
}

function inserir() {
    let numero = document.querySelector('#posicao').value -1;
    let novo = document.querySelector('#novo').value;
    document.getElementsByClassName('time')[numero].innerHTML = novo;
}
