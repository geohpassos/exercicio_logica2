var nota1 = parseFloat(prompt("digite a primeira nota do aluno: "))
var nota2 = parseFloat(prompt("digite a segunda nota do aluno: "))
var nota3 = parseFloat(prompt("digite a terceira nota do aluno: "))
var media = (nota1+nota2+nota3)/3
 if(media==10){
    alert("Aprovado com Distinção, sua nota foi "+media)
}
else if (media>=7){
    alert("Você está aprovado, sua nota foi "+media)
}
else if(media<7){
    alert("Aluno reprovado sua nota foi abaixo da media "+media)
}else{
    alert("número não está adequado para a media")
}
