var dia = parseInt(prompt("Digite o dia (dd):"))
var mes = parseInt(prompt("Digite o mes (mm):"))
var ano = parseInt(prompt("Digite o ano (aaaa):"))
if (dia>1 && dia<=31 && mes>1 && mes<=12 && ano>1){
    alert("a data " + dia+ "/" +mes+ "/" +ano +  " é uma data valída")
}else{
    alert("a data " + dia+ "/" +mes+ "/" +ano +  " é uma data invalída")
}