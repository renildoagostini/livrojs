/*const anuncio = "Vende-se casa na praia do Laranjal, proximo ao trapiche"
let numPalavras = 0; //Inicial o contador
//const tam = anuncio.length; //obtém o tamanho
for(let i = 0; i < anuncio.length; i++){ //percorre os caracteres do anuncio
    if(anuncio.charAt(i) ===" "){ //Se encontrou um espaço
        numPalavras++;  //incrementa o número de palavras
    }
}
//exibe anúncio e número de palavras (que é o número de espaça + 1)
console.log(`Anúncio: ${anuncio}\nNº Palavras: ${(numPalavras + 1)}`);*/

//const anuncio = "Vende-se casa na praia do Laranjal, proximo ao trapiche"
//const palavras = anuncio.trim().split(/\s+/); // Divide em palavras ignorando múltiplos espaços
//console.log(`Anúncio: ${anuncio}\nNº Palavras: ${palavras.length}`);

const anuncio = "Vende-se casa na praia do Laranjal, proximo ao trapiche"
let numPalavras = 0; //Inicial o contador
for(const letra of anuncio){
    if(letra === " "){ //Se encontrou um espaço
        numPalavras++;  //incrementa o número de palavras
    }
}

console.log(`Anúncio: ${anuncio}\nNº Palavras: ${numPalavras + 1}`);

