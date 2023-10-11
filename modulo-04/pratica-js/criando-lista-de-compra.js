/*
    Capture 10 items para compor a lista de um
    supermercado.
    Após capturar os 10 items, imprima-os, separando
    por vírgula.
*/

let buyList = []

for (i=0; i < 10; i++){
    let item = prompt(`Digite o item ${(i)}:`)
    console.log(item)

    buyList[i] = item
}

console.log(buyList)