/*
    Solicite 2 números, faça a soma deles
    e apresente o resultado final ao usuário
*/

let numberOne = Number(prompt('Digite o número 1: '))
let numberTwo = Number(prompt('Digite o número 2: '))

const sum = numberOne + numberTwo
const division = sum /2

alert(`
    A soma dos números 1 e 2 é: ${sum};
    A divisão da soma é: ${division}
`)
