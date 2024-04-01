function calc() {
    //DECLARANDO AS VARIÁVEIS
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let res = document.querySelector('#resultado');
    res.innerHTML = num1 * num2;
}
