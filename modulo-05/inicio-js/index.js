let a = Number(Math.random()*100).toFixed(0)
let b = Number(Math.random()*100).toFixed(0)

function hello(){
    alert("Hello World!")
}

function sum(){
    let sum = Number(a) + Number(b)
    
    alert(`A soma das variáveis ${a} e ${b} é igual: ${sum}`)
}

function isNumber(){
    let i = prompt('Digite algo')
    let type = typeof(i)

    console.log(type)
    if (type != 'Number'){
        alert("Não é um número")
    } else{
        alert("É um número")
    }
}

function isString(){
    let i = prompt('Digite algo')
    let type = typeof(i)

    if (type != 'String'){
        alert("Não é uma string")
    } else{
        alert("É uma string")
    }
}

function isBool(){
    let i = true
    let type = typeof(i)

    if (type != 'Boolean'){
        alert("Não é um booleano")
    } else{
        alert("É uma booleano")
    }
}

function sub(){
    let sub = a - b

    alert(`A subtração entre a variável ${a} e ${b} é igual: ${sub}`)
}

function mul(){
    let mul = a * b

    alert(`A multiplicação entre a variável ${a} e ${b} é igual: ${mul}`)
}

function div(){
    let div = a / b

    alert(`A divisão entre a variável ${a} e ${b} é igual: ${div}`)
}

function par(){
    let p = a%b
    if (p = 0){
        alert(`O número ${a} é um par.`)
    } else{
        alert(`O número ${a} não é um par.`)
    }
}

function impar(){
    let p = a%b
    if (p != 0){
        alert(`O número ${a} é impar.`)
    } else{
        alert(`O número ${a} não é impar.`)
    }
}

hello()
sum()
isNumber()
isBool()
sub()
mul()
div()
par()
impar()