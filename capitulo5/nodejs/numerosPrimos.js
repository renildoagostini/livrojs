const teclado = require("prompt-sync")();

const numero = Number(teclado("Informe o número: "))

let numeroDivisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        numeroDivisores++;
    }
}
if (numeroDivisores == 2) {
    console.log ( `O número ${numero} é primo`);
} else {
    console.log ( `O número ${numero} não é primo`)
}
