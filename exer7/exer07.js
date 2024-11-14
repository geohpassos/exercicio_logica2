var num1 = parseInt(prompt("digite o primeiro número: "))
var num2 = parseInt(prompt("digite o segundo número: "))
var num3 = parseInt(prompt("digite o terceiro número: "))
if (num1>num2 && num1>num3  ){
var maior= num1
} else if (num2>num1 && num2>num3){
 maior =num2
    }
else{
maior = num3
}
if(num1<num2 && num1<num3){
   var menor = num1
}else if(num2<num1 && num2<num3){
    var menor =num2
}else if(num3<num2 && num3<num2){
   var menor = num3
}
alert("O maior número é o "+maior,"\n" + " O menor número é o "+menor)

