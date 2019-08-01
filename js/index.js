var code = parseInt(prompt("Digite o código do aluno"));
var note1 = parseFloat(prompt("Digite a primeira nota"));
var note2 = parseFloat(prompt("Digite a segunda nota"));
var note3 = parseFloat(prompt("Digite a terceira nota"));
var average = 0;
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")
var p4 = document.createElement("p")

if (note1>note2 && note1>note3) {
	average = (((note1*4)+(note2*3)+(note3*3))/10)
}else if(note2>note1 && note2>note3) {
	average = (((note2*4)+(note3*3)+(note1*3))/10)
}else if(note3>note2 && note3>note1) {
	average = (((note3*4)+(note2*3)+(note1*3))/10)
}else {
	document.body.append("Error")
}
if (average >= 5) {
	p1.append("O codigo do aluno é: " + code);
	document.body.appendChild(p1);
	p4.append("Suas três notas são: " + note1 + ",   " + note2 + " e   " + note3);
	document.body.appendChild(p4);
	p2.append("A média pondera é: " + average);
	document.body.appendChild(p2);
	p3.append("Situação do aluno: Aprovado");
	document.body.appendChild(p3);
}else {
	p1.append("O codigo do aluno é: "+ code);
	document.body.appendChild(p1);
	p4.append("Suas três notas são " + note1 + ",   " + note2 + " e   " + note3);
	document.body.appendChild(p4);
	p2.append("A média ponderada é: " + average);
	document.body.appendChild(p2);
	p3.append("Situação do aluno: Reprovado");
	document.body.appendChild(p3);
}