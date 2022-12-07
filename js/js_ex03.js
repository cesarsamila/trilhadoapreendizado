var frase, n1,n2, subtracao;

frase="Aqui temos uma String"

alert(frase)

n1=300
n2=151.4

subtracao=n1-n2

alert(subtracao)
document.write("<h2>"+subtracao+"</h2>")

/*subtracao de valores a partir do usuário, o  programa não deve apresentar números negativos*/
n1=prompt("Entre com o valor")
n2=prompt("Entre com outro valor")
subtracao=parseInt(n1)-parseInt(n2)
alert("O resultado da subtracao é"+subtracao)

if(subtracao < 0){
    document.write('<h2>Numero e menor que 0 </h2>');
}else{
    document.write('<h2>'+subtracao+'</h2>');
}