
    //declara a variável numero com let, pois ela pode ser alterada e será fora do bloco do...while
    const teclado = require("prompt-sync")();
    
    let numero;

    do{
        numero = Number(teclado("Número: "));
        if(numero === 0 || isNaN(numero)){
            alert("Digite um número válido")
        }        
    }while(numero === 0 || isNaN(numero));

    let pares = `Pares entre 1 e ${numero}: `;

    for(let i = 2; i <= numero; i = i + 2){
        if(numero === i){
            pares = pares + numero + "."
        }else{
            pares = pares + i + ", ";
        }       
    }

    console.log(pares);

