const situacao = (nota, media = 7) => {
    if(nota >= media){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}

//const prova1 = Number(prompt("Qual a nota: "));


situacao(6);