var v = parseFloat(prompt("Informe o valor do saque:(10 á 600) "))

if(v>=10 && v<=600){
 alert("Para sacar a quantia "+v )
 var n100 = (v / 100)|0
 v %=100
 var n50 = (v / 50)|0
 v %=50
 var n10= (v / 10)|0
 v %=10
 var n5 = (v / 5)|0
 v %=55
 var n1 = v
alert("Serão fornecidas "+n100+ " Notas de 100")
 alert("Serão fornecidas "+n50+ " Notas de 50")
 alert("Serão fornecidas "+n10+ " Notas de 10")
 alert("Serão fornecidas "+n5+ " Notas de 5")
 alert("Serão fornecidas "+n1+ " Notas de 1")
}
else{
    alert("Valor invalido")
}