// Variables

let randomNumber, attempt, response
const buttonSend = document.querySelector("#buttonSend")

// Events

buttonSend.addEventListener('click', newAttempt())


// Functions 

function newAttempt(){
    attempt = document.querySelector('#attempt').value
    randomNumber = (Math.random()*10).toFixed(0)
    
    
    if (attempt === randomNumber){
        response = 'Parabéns, você acertou!!'
    } else{
        response = 'Não foi dessa vez, tente novamente!!'
    }

    console.log(response)
}
