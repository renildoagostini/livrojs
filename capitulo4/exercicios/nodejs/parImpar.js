//cria o pacote prompt-sync
const prompt = require("prompt-sync")();

//ler a entrada de dados
const numero = Number(prompt("Informe o número: "));

console.log(numero % 2 == 0 ? `O número ${numero} é par` : `O número ${numero} é impar`);