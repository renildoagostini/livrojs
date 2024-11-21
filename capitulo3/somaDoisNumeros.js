const prompt = require("prompt-sync")();

const num1 = Number(prompt("1º Numero: "));
const num2 = Number(prompt("2º Numero: "));

const soma = num1 + num2;

console.log(`${soma}`)