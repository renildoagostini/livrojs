const palavra = "Pelotas"; 

//inverso inicia com a última letra de palavra em caixa alta
let inverso = palavra.charAt(palavra.length - 1).toUpperCase();

//for decrescente percorre as demais letra e....
for(let i = palavra.length - 2; i >= 0; i--){
    inverso += palavra.charAt(i).toLowerCase(); //converte em caixa baixa
}

//exibe a palavra original e invertida

console.log(`Palavra: ${palavra}\nInvertida: ${inverso}`);
