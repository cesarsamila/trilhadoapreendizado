var cont
var resposta

cont=0

while(cont<10)
{
    alert("Como deixar usuário louco com while em "+ cont)
    cont++
}

for(cont= 0; cont<10;cont++){
    alert("Como deixar usuário louco com for em "+ cont)
}

do{
    resposta=prompt("Prosseguir?")
}while(resposta=="sim")