/*Elaborar um programa para uma clinica veterinária, que lei o peso de uma ração em kg e o quanto o gato consome por dia de ração, em gramas. Informe quantos irá durar a ração e o quanto sobra de ração (em gramas) */

//adiciona o pacote prompt-sync ao programa
const prompt = require("prompt-sync")();

//lê os dados de entrada
const pesoKg = Number(prompt("Peso da ração (kg): "));
const consumo = Number(prompt("Consumo diário (gr): "));


//cria variável auxiliar pesoGr
const pesoGr = pesoKg * 1000;


//calculo das resposta
const duracao = Math.floor(pesoGr / consumo);

const sobra = pesoGr % consumo;

//saída de dados
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);