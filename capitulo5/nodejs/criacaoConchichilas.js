
const teclado = require("prompt-sync")();

const numeroConchichilas = Number(teclado('Informe o Número de Conchichilas:'));

const numeroAno = Number(teclado("Informe o Número de ano: "));

let resposta = "";
let total = numeroConchichilas;

for( let i = 1; i <= numeroAno; i++){           
        resposta += `${i}ª ano: ${total} Conchichilas\n`;
        total = total * 3;   
}

console.log(resposta);

