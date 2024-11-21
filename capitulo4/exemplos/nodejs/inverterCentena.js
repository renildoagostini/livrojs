/** elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida. Caso não seja uma centena, exiba a mensagem 
 */

//Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

//entrada de dados
const numero = Number(prompt("Informe a centena: "))

//verifica se o número é uma centena
if((numero < 100) || numero >= 1000){
    console.log(`Erro... O número informado não é uma centena`); 
}

//obtém o primeiro número
const numero1 = Math.floor(numero /100);
const sobra = numero % 100;
const numero2 = Math.floor(sobra / 10);
const numero3 = sobra % 10;

//exibição dos dados
console.log(`Invertido: ${numero3}${numero2}${numero1}`);

 