let randomNumber; attempt; message; result

function random(){
    attempt = document.querySelector('#attempt').value
    result = document.querySelector('#result')
    
    randomNumber = (Math.random()*10).toFixed(0)
    
    
    if (attempt === randomNumber){
        message = 'Parabéns, você acertou!!'
    } else{
        message = 'Não foi dessa vez, tente novamente!!'
    }

    alert(message)

    console.log(attempt, randomNumber)
}
