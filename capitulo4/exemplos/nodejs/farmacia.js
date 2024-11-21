/*
Uma farmácia necessita de uma programa que leia o total de uma compra. Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições:
a) Cada parcela eve ser de no mínimo R$ 20,00
b) O número máximo de parcelas permitido é 6
*/

//adiciona pacote prompt-sync
const prompt = require("prompt-sync")();

//ler a entrada de dados
const valor = Number(prompt("Valor da compra R$: "));

//auxilia no número de parcelas sem condições
const auxiliar = Math.floor(valor/20);

//operador ternario
//const parcelas = auxiliar == 0 ? 1: auxiliar > 6 ? 6 : auxiliar

let parcelas;
if(auxiliar == 0){
    parcelas = 1;
}else if(auxiliar > 6){
    parcelas = 6;
}else{
    parcelas = auxiliar;
}

//cálculo do valor da parcela
valorParcela = valor / parcelas

//exibição dos dados
console.log(`Pode pagar em ${parcelas} x de R$: ${valorParcela.toFixed(2)}`);