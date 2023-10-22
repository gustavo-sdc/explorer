/*

    Devemos solicitar dois números, e realizar as
    seguintes operações:

    - Soma;
    - Subtração;
    - Multiplicação;
    - Divisão;
    - Resto;
    
    - Verificar se a soma dos números é par ou ímpar;
    - Verificar se os números são iguais ou diferentes.

*/

let number1, number2, sum, sub, mul, div, res, parImpar, equal

function operations(){
    
    number1 = Number(prompt('Informe o número 01: '))
    number2 = Number(prompt('Informe o número 02: '))

    if (number1 === number2 ){
        equal = 'iguais'
    } else{
        equal = 'diferentes'
    }

    if ( (number1 % number2) / 2 == 0 ){
        parImpar = 'Par'
    } else{
        parImpar = 'Ímpar'
    }


    sum = number1 + number2
    sub = number1 - number2
    mul = number1 * number2
    div = (number1 / number2).toFixed(2)
    res = number1 % number2

    return `
    Este é o resuldado das operações:

    Número 01: ${number1};
    Número 02: ${number2};

    Soma: ${sum};
    Subtração: ${sub};
    Multiplicação: ${mul};
    Divisão: ${div};
    Resto da divisão: ${res};

    Este número é ${parImpar};
    Estes números são ${equal}.
    `
}

let result = operations()
alert(result)