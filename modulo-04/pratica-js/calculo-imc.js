/* 

    Dada uma lista de pacientes, descrubra o IMC
    de cada paciente e imprima:

    "Recipiente X possui o IMG de: Y."

    Onde X é o nome do paciente e o Y é o IMG do
    paciente.

    Crie uma função para fazer o calculo do IMC.

*/

function calculatorImc(){
    
    let name, weight, height, imc;
    
    name = prompt("Digite o nome do paciente: ")
    weight = Number(prompt("Digite o peso do paciente: "))
    height = Number(prompt("Digite a altura do paciente: "))

    imc =Number( weight / (height**2))
    console.log(imc)

    let imcCalc = imc.toFixed()
    
    console.log(imcCalc)

    return `O paciente ${name}, possui o IMC de: ${imcCalc}`
}

let imc = calculatorImc()
alert(imc)