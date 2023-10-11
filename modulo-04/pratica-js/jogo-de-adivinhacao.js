/*
    ** Jogo da advinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número
    digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabens! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas.

*/

let randomNumber = Math.random()* 10
randomNumber = Math.round(randomNumber)

console.log(randomNumber)

let tryNamber = Number(prompt(`Advinhe o número que estou pensando? Está entre 0 e 10.`))
let attempts = 0;

while (tryNamber !== randomNumber){
    tryNamber = Number(prompt(`Erro, tente novamente:`))
    attempts++

    if (tryNamber == randomNumber){
        break
    }
}

alert(`Parabéns! Você advinhu o número ${randomNumber} em ${attempts} tentativas`)