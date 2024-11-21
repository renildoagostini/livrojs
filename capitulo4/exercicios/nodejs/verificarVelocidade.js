const prompt = require("prompt-sync")();

const velocidadePermitida = Number(prompt("Informe a velocidade permitida: "));
const velocidadeCondutor = Number(prompt("Informe a velocidade do condutor: "));

let multaLeve = velocidadePermitida + (velocidadePermitida * 0.2);

let velocidade = velocidadeCondutor <= velocidadePermitida ? `situação: Sem multa` : velocidadeCondutor <= multaLeve ? `situação: Multa Leve` : `situação: Multa Grave`;

console.log(velocidade);
