export const alert ={
    alertBox: document.querySelector('#alert'),
    alertContent: document.querySelector('#alertContent'),
    responseMenssage: `Preencha todos os campos.`, 

    errorEmptyInput(){
        alert.alertContent.innerText= alert.responseMenssage
        alert.alertBox.classList.add('open')
    },
}
