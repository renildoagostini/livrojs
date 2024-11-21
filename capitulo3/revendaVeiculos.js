//adiciona o pacote do programa
const prompt = require("prompt-sync")();

//le os dados de entrada
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$:"));

//calcula o valor da entrada (50% de entrada)
const entrada = preco * 0.50;

//calcula o restante (12 vezes)
const parcelas = (entrada / 12);

//exibe as respostas
console.log (`Promoção: ${veiculo} `);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12 parcelas de ${parcelas.toFixed(2)}`);
