/*
	Solicitar o nome do aluno e as 3 notas
	do bimestre, e calcular a média daquele aluno.

	A média positiva deverá ser maior que 6

	Se o aluno passou no bimestre, dar os parabéns.

	Se o aluno não passou no bimestre, motivar o aluno a dar o seu
	melhor na prova de recuperação.

	Em ambos os casos, mostre uma mensagem com o nome do aluno e a 
	nota.
*/

let studantName = prompt('Qual é o nome do aluno: ')
let noteOne = Number(prompt('Digite a nota da primeira avaliação: '))
let noteTwo = Number(prompt('Digite a nota da segunda avaliação: '))
let noteThree = Number(prompt('Digite a nota da terceira avaliação: '))

const media = (noteOne + noteTwo + noteThree) / 3
media = media.toFixed(2)
let mensagem = `O Aluno ${studantName}, tirou ${media} na media final.`


if (media > 6){
	console.log(mensagem)
	console.log(`Parabéns ${studantName}, você passou de ano!`)
} else{
	console.log(mensagem)
	console.log(`Infelizmente ${studantName}, você ficou de recuperação.`)
	

}