var l1 = parseFloat(prompt("Informe o primeiro lado do triangulo: "))
var l2 = parseFloat(prompt("Informe o segundo lado do triangulo: "))
var l3 = parseFloat(prompt("Informe o terceiro lado do triangulo: "))
if (l1==l2 && l2==l3){
    alert("Triangulo equilatero")
}else if(l1==l2 || l2==l3){
    alert("Triangulo Isóceles")
}
else{
    alert("Triangulo escaleno")
}