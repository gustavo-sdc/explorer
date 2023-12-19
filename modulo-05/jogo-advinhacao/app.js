// Variables

let randomNumber, attempt, response, attemptNumber
const buttonSend = document.querySelector("#buttonSend")
const buttonAgain = document.querySelector("#again")
const attemptBox = document.querySelector("#attemptBox")
const responseBox = document.querySelector("#responseBox")
const responseContent = document.querySelector("#responseContent")

attemptNumber = 0 
attempt = document.querySelector('#attempt')

// Events

buttonSend.addEventListener('click', newAttempt)
buttonAgain.addEventListener('click', again)

// Functions    
function toggle(){
    attemptBox.classList.toggle('hide')
    responseBox.classList.toggle('hide')
}

function again(){
    toggle()
}

function newAttempt(e){
    e.preventDefault()
    console.log(attemptNumber)
    
    if (attempt.value === ''){
        alert('Preencha a caixa de texto.')
        
    } else{
        attemptNumber++
        attempt.value
        randomNumber = (Math.random()*10).toFixed(0)
        
        
        if (attempt.value === randomNumber){            
            response = `Parabéns, você acertou em ${attemptNumber} tentativas!!`
            attemptNumber = 0
            
            toggle()
            responseContent.innerText = response
        } else{
            attempt.value = ''

        }
        console.log(attemptNumber, randomNumber)
    }
}