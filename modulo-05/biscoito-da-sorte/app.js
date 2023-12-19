/*
    PROJETO BISCOITO DA SORTE

    Ao passar o mouse em cima do biscoito, ele irá
    vibrar, ao clicar, ele irá sortear um novo 
    biscoito.


    PASSO A PASSO:
    1. Clique no biscoito -> sortear a frase do biscoito;
    2. Mudar a tela;
    3. Animação para aparecer a frase;
    4. Clique em Tentar novamente -> Volta para a tela anterior.

*/


/* Variables */
let message, messageList, randomID
const snack = document.querySelector("#snack")
const again = document.querySelector("#again")
const content = document.querySelector("#content")
const response = document.querySelector("#response")
const luckBox = document.querySelector("#luckBox")
const page = document.querySelector("body")

messageList = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]

/* Events */
snack.addEventListener('click', luck)
page.addEventListener('keypress',luck)
again.addEventListener('click', attempt)


/* Functions */
function toggle(){
    response.classList.toggle('hide')
    content.classList.toggle('hide')
}


function luck(e){
    console.log(e)

        randomID = (Math.random()*9).toFixed(0)
        message = messageList[randomID]
    
        luckBox.innerText = message
    
        toggle()


}

function attempt(){
    toggle()
}   