const teclado = require("prompt-sync")(); // Pacote de entrada de dados
const formula = teclado("Fórmula: "); // Lê a fórmula como string

// Contadores
let abre = 0;
let fecha = 0;

for (const simbolo of formula) {
    if (simbolo === "(") {
        abre++;
    } else if (simbolo === ")") {
        fecha++;
    }

    // Se em algum momento, o número de fecha for maior que abre
    if (fecha > abre) {
        console.log("Erro... fórmula incorreta (fechamento incorreto)");
        return; // Sai do programa imediatamente
    }
}

// Verifica se o número de abre e fecha está igual após o loop
if (abre === fecha) {
    console.log("Fórmula correta em relação aos parênteses");
} else {
    console.log("Erro... fórmula incorreta (parênteses não balanceados)");
}
