const teclado = require("prompt-sync")();

const numero = Number(teclado("Informe o número: "));


    let estrela = "";
    for(let i = 0; i<= numero; i++){
        if(i % 2 === 0){
            estrela = estrela + "*";
        }else{
            estrela = estrela + "-";
        }
    }   

    console.log(estrela);
