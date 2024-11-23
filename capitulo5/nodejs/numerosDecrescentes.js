const teclado = require("prompt-sync")();

const numero = Number(teclado("Informe o número: "));

let resposta = ""; // Armazena os números em uma única linha

for (let i = numero; i > 0; --i) {
    if (i === 1) {
        resposta = `${resposta}${i}.`; // Adiciona o último número com um ponto final
    } else {
        resposta = `${resposta}${i}, `; // Adiciona os números separados por vírgulas
    }
}

console.log(resposta); // Exibe o resultado em uma única linha

