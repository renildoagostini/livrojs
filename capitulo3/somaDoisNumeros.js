//adicionar pacote para entrada de dados
const prompt = require("prompt-sync")();

//le os números
const num1 = Number(prompt("1º Numero: "));
const num2 = Number(prompt("2º Numero: "));

//faz a soma dos números
const soma = num1 + num2;

//exibe o resultado
console.log(`A soma do número ${num1} com o número ${num2} é: ${soma}`)