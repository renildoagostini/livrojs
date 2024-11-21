/*Elaborar um programa para uma empresa que leia o salario de um funcionário e o tempo em que o funcionario trabalha na empresa.sabendo que a cada 04 anos o funcionario recebe um acréscimo de 1% no salario, calcule e informe o número de quadrienio a que o funcionario tem direito e o salario final */

//adiciona o pacote prompt-sync ao programa
const prompt = require("prompt-sync")();

//le os dados de entrada
const salario = Number(prompt(`Salário R$: `));
const tempo = Number(prompt(`Tempo (anos): `));

//calcula o quadrienio
const quadrienio = Math.floor(tempo / 4);

//calculo do acréscimo do salário
const acrescimo = (salario * quadrienio) / 100; 

//exibe os resultados
console.log(`Quadriênios: ${quadrienio}`);
console.log(`Salário final R$: ${(salario + acrescimo).toFixed(2)}`);