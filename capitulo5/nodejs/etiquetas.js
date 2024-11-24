const teclado = require("prompt-sync")();

const produto = teclado("Informe o produto: ");
const numero = Number(teclado("Informe o número de etiquetas: "));

for(let i = 1; i <= numero / 2; i++){
    console.log(`${produto.padStart(10, "-").padEnd(30)} ${produto.padEnd(30)} `);
}

if(numero % 2 == 1){
    console.log(produto.padStart(30, " "));
}