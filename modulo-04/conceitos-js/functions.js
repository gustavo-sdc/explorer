// Functions - part 01


// criar aplicativo de frases motivacionais

//console.log('é isso ai')
//console.log('para não vei')
//console.log('deixa de ser besta')

function createPhrases(){
    console.log('é isso ai')
    console.log('para não vei')
    console.log('deixa de ser besta')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()

console.log('fim do programa')


// podemos usar a função para agrupar códitos 

/*------------------------------------------------------------------*/

// function expression ou function anonymous

const sum = function(/*parametros*/ number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

// sum(number1,number2) => argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`'a soma é ${sum(number1, number2)}'`)


// function scope
let subject 

function createTink(){
    subject ='study'
    return subject
}

console.log(subject)
console.log(createTink())


// function hoisting
/*
sayMyName()

function sayMyName(){
    console.log('Gustavo')
}
*/

/*
    Uma função como acima, sofre elevação pois não é uma expressão, funções
    que são expressões (dentro de variáveis), não sofre hoisting
*/

/*
tellMyName()

const name = function tellMyName(){
    console.log('Gustavo')
}
*/

/*-------------------------------------------------------------*/

// arrow function (=>)

/*
    const callMyName = function (){
        console.log('Gustavo')
    }
*/

const callMyName = () => {
    console.log('Santos')
}

callMyName()

/*------------------------------------------------------------*/

// callback function

function tellMyName(name){
    console.log('antes da callback')
    name()
    console.log('depois de executar a callback')
}

tellMyName(
    ()=>{
        console.log('estou em uma callback')
    }
)


/* -------------------------------------------------------------*/

// Funtion() constructor
// expressão new, criar um novo objeto, this teyword

function Person(name, age){
    this.name = name
    this.age = age
    this.walk = ()=>{
        return this.name + ' está andando'
    }
}

const gu = new Person('Gustavo', 18)
const rafa = new Person('Rafael', 1.2)

console.log(gu)
console.log(gu.walk())

console.log(rafa)
console.log(rafa.walk())