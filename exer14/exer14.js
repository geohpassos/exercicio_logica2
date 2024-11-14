var n1 = parseFloat(prompt("Digite a prineira nota: "))
var n2 = parseFloat(prompt("Digite a segunda nota: "))
var media = (n1+n2)/2
if (media>9 && media<10){
    alert("Aprovado")
}
else if(media<9 && media>7.5){
    alert("aprovado")
}
else if(media<7.5 && media>6){
    alert("aprovado")
}
else if(media<6 && media>4){
    alert("reprovado")
}
else if(media<4 && media>0){
    alert("reprovado")
}
else{
    alert("Invalido")
}