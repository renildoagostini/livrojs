const teclado = require("prompt-sync")(); // Pacote de entrada de dados
const altura = Number(teclado("Informe a Altura da Árvore: ")); //Lé o número de linhas (altura)

console.log(); //deixa uma linha em branco

for( let i = 1; i < altura; i++){ // inicia a repetição
    const espacos = 30 + (altura - i) //calcula os espaços do inicio
    console.log(" ".repeat(espacos) + "*".repeat(i*2))//exibe cada linha
}