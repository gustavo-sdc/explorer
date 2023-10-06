/*
    Capturar 2 números

    Fazer:
        => soma, subtração, multiplicação, divisão e resto.
        => e para cada operação mostrar um alerta com resultado.
*/

let numberOne = Number(prompt('Digite o primeiro núḿero: '))
let numberTwo = Number(prompt('Digite o primeiro núḿero: '))

function calc(numberOne, numberTwo){

    const sum = numberOne + numberTwo
    const sub = numberOne - numberTwo
    const mul = numberOne * numberTwo
    const div = numberOne / numberTwo
    const res = numberOne % numberTwo

    return `
    Operações entre ${numberOne} e ${numberTwo}:
        Soma = ${sum}
        Subtração = ${sub}
        Multiplicação = ${mul}
        Divisão = ${div}
        Resto = ${res}
    `
}

let calculator = calc(numberOne, numberTwo)

alert(calculator)