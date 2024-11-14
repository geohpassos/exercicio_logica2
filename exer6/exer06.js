var num1 = parseInt(prompt("digite o primeiro número: "))
var num2 = parseInt(prompt("digite o segundo número: "))
var num3 = parseInt(prompt("digite o terceiro número: "))
if (num1>num2 && num1>num3){
alert("O maior número é o primeiro número "+num1)
} else if (num2>num1 && num2>num3){
    alert("O maior número é o segundo número "+num2)
    }
else{
    alert("O maior número é o terceiro número "+num3) 
}