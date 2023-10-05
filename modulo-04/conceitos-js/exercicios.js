// Declare uma variável de nome weight

let weight

// Que tipo de dado é a variável acima?
// Undefined
console.log(typeof(weight))

/*
    Declare uma variável e atribua valores para cada um dos dados:
        => name String
        => age: Number (integer)
        => stars: Number (float)
        => isSubscribed: Boolean
*/

let name='Gustavo'
let age= 18
let stats= 5.5
let isSubscribed= true

/*
    A variável studant abaixo é que tipo de dado?

    Atribua a ela as mesmas propriedados e valores do exercídio 3

    Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight: kg.

        Atenção, substitua <name>, <Age> e <weight> pelos valores de cada
        propriedade do objeto. 
*/ 

let studant = {
    name :'Gustavo',
    age:'18',
    weight: 66
}
//Object


console.log(
    `${studant.name} de idade ${studant.age} pesa ${studant.weight}kg.`
)

/*
    Declare uma variável do tipo Array, de nome studants e atribua a ela nenhum valor
    ou seja, somente o array vazio.
*/

let studants =[]

/*
    Reatribua valor para a variável acima, colocando dentro dela o objeto studant
    da questão anterior, não copie e cole o objeto, use o objeto e insira-o dentro
    do Array.
*/


studants = [
    studant
]

console.log(studants[0])

/*
    Crie um novo studant e coloque na posição 1 do array studants
*/

const john ={
    name: 'John',
    age: 23,
    weight: 74.8,
    isSubscribed: true
}

studants[1] = John

/*
    Sem rodar o código responda qual é a resposta do código abaixo e porque? Após
    sua resposta, rode o códdoigo e veja se você acertou.

    console.log(a)
    var a = 1


    resposta: undefined, pois o valor ainda não foi definido; hoising
*/