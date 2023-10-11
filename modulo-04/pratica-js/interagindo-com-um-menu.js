/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista;
        2. Mostrar itens cadastrados;
        3. Sair do programa.

    O programa deverá capturar o número digitado pelo usuário e mostrar os
    seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista;
    Caso o usuário digite 2, ele poderá ver os items cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem:
            "Não existem items cadastrados."

    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let list = [];
let option = 0;


function one(){
    let item = prompt(`Digite o nome do item:`)
    list[option] = item

    option++
}

function two(){
    if (list.length == 0){
        alert(`Não existem items cadastrados.`)
    } else{
        alert(list)
    }
}


let response = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
        1. Cadastrar um item na lista;
        2. Mostrar itens cadastrados;
        3. Sair do programa.
`))

while (response != 3){
    if (response == 1){
        one()
    } else if( response == 2){
        two()
    } else{
        alert(`Essa opção não está programada, tente novamente.`)
    }

    response = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
        1. Cadastrar um item na lista;
        2. Mostrar itens cadastrados;
        3. Sair do programa.
`))
}
