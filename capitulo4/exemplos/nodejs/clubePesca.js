/*
A entrada para o clube de pesca custa R$ 20.00 por pessoa e cada pessoa tem direito a levar um peixes. peixes extras custam R$12.00. elabore um programa que leia o número de pessoas de uma familia que foram ao clube e o número de pessoas de uma família que foram ao club e o número de peixes obtidos na pescaria
*/

//adiciona pacote prompt-sync
const prompt = require("prompt-sync")();

//entrada de dados
const numeroPessoas = prompt("Informe o número de pessoas da família: ");
const numerosPeixes = prompt("Informe o número de peixes pescados: ");

let despesas;

if(numerosPeixes <= numeroPessoas){
    despesas = numeroPessoas * 20;
}else{
    despesas = (numeroPessoas * 20) + ((numerosPeixes - numeroPessoas) * 12);
}

console.log(`O total de despesas da família foi R$ ${despesas.toFixed(2)}`);