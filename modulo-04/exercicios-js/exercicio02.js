/* 

    Criar uma lista de estudantes com os seguintes dados:
    - Nome;
    - Nota da primeira prova;
    - Nota da segunda prova;

    Criar uma função que calcule a média das notas de cada aluno;
    Considerando a nota de corte como 7, fale se o aluno foi aprovado ou não.

*/

let average, approval, index, studant_noteOne, studant_noteTwo, response
index = 0

let studants = [
    {
        nome: 'Gustavo',
        nota_1:10,
        nota_2:9.8
    },
    {
        nome: 'Emerson',
        nota_1: 10,
        nota_2: 10
    }
]

studant_noteOne = studants[index].nota_1
studant_noteTwo = studants[index].nota_2

console.log(studants.length)


function result(){
    for (i in studants){
        average = ((studant_noteOne + studant_noteTwo) / 2).toFixed()
        
        if (average >= 7){
            response = 
            `O aluno ${studants[index].nome}, obteve a média ${average}, e  foi aprovado! \nParabéns ${studants[index].nome}, você passou!!
            `
        } else{
            response = 
            `O aluno ${studants[index].nome}, obteve a média ${average}, e foi reprovado! \n${studants[index].nome} não desista! Você conseguirá a sua aprovação!!
            `
        }
        
        index++
        alert(response)
    }
}

let calc = result()
