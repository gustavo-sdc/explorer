/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista deverá conter:
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes.

*/

let listPatient = []
let namePatients = []

class Patient{
    constructor(name, age, weight, height){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
    }
}

let option = Number(prompt(`
Digite:

1. Para cadastrar um novo paciente;
2. Para ver uma lista com o nome dos pacientes;
3. Para sair
`))

while ( option != 3){
    if (option == 1){
        let name = prompt('Qual é o nome do paciente? ')
        let age = Number(prompt(`Qual é a idade do paciente ${name}?`))
        let weight = Number(prompt(`Qual é o peso do paciente ${name}?`))
        let height = Number(prompt(`Qual é a altura do paciente ${name}?`))
    
        let patient = new Patient(name, age, weight, height)
    
        listPatient.push(patient)
    } else if ( option == 2){
        let e;
        let i = listPatient.length

        for (e = 0; e < i; e++ ){
            namePatients[e] = listPatient[e].name
        }

        alert(namePatients)
    }

    option = Number(prompt(`
        Digite:

        1. Para cadastrar um novo paciente;
        2. Para ver uma lista com o nome dos pacientes;
        3. Para sair
    `))
}
