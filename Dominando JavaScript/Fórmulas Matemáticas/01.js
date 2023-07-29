/* Escreva um programa que solicite ao usuário dois números e exiba soma, subtração, multiplicação e divisão entre eles */

function calcular(n1, n2) {

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2;

    console.log(`O resultado da soma é: ${soma}`);
    console.log(`O resultado da subtração é: ${subtracao}`);
    console.log(`O resultado da multiplicação é: ${multiplicacao}`);
    console.log(`O resultado da divisão é: ${divisao}`);
}

calcular(12, 6);