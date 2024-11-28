
const teclado = require("prompt-sync")();

const numeroConchichilas = Number(teclado('Informe o Número de Conchichilas:'));


let resposta = "";
let total = numeroConchichilas;

if (numeroConchichilas < 2) {
        console.log("Informe um número maior que 2");
} else {
        const numeroAno = Number(teclado("Informe o Número de ano: "));
        for (let i = 1; i <= numeroAno; i++) {
                resposta += `${i}ª ano: ${total} Conchichilas\n`;
                total = total * 3;
        }
}
console.log(resposta);

