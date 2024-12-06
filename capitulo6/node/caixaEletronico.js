const teclado = require("prompt-sync")();

console.log("Informe o valor do saque ou 0 para sair");
const saques = []; //declara o vetor

do{
    const valor = Number(teclado("Saque: ")) //lê o valor do saque
    if(valor === 0){ //Antes de ler o valor, verifica
        break; //sai da repetição
    }

    saques.push(valor); //adiciona o valor ao vetor
    if(valor % 10 === 0){
        console.log("Saque realizado com sucesso");
    }
    else{
        console.log("Erro... valor inválido(Deve ser multiplo de 10)")
    }
    
}while(true);

console.log("\nSaques Válidos"); // gera uma linha em branco
console.log("* - ".repeat(30));
const saquesValidos = saques.filter(saque => saque % 10 === 0);
for (const saque of saquesValidos){
    console.log(saque.toFixed(2));
}

console.log("* - ".repeat(30));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNº de tentativas de Saques (saques inválidos): ${saquesInvalidos}`);
