var p1 = parseFloat(prompt("Digite o preço do primeiro produto: "))
var p2 = parseFloat(prompt("Digite o preço do segundo produto: "))
var p3 = parseFloat(prompt("Digite o preço do terceiro produto: "))
if (p1<p2 && p1<p3){
    alert("O primeiro produto que você deve comprar no preço de "+p1)
} else if (p2<p1 && p2<p3){
    alert("O segundo produto que você deve comprar no preço de "+p2)
}else{
    alert("O terceiro produto que você deve comprar no preço de "+p3) 
}