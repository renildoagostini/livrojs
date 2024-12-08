const teclado = require("prompt-sync")();

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair");
const clientes = []; //declara o vetor

do{
    const nome = teclado("Nome: ") //lê o nome
    if(nome ==="Fim"){ //Antes de ler a idade, verifica
        break; //sai da repetição
    }
    const idade = Number(teclado("Idade: "));

    clientes.push({nome, idade}); //adiciona ao vetor de objetos
    console.log("Cliente inserido na fila");
}while(true);

console.log("\nFila Preferencial") //No inicio gera uma nova linha
console.log("*".repeat(40)); //exibe * 40 vezes
const filaPreferencial = clientes.filter(cliente => cliente.idade >= 60);
filaPreferencial.forEach((fila, i) =>{
    console.log(`${i + 1}. ${fila.nome}`);
});

console.log("\nFila Normal") //No inicio gera uma nova linha
console.log("*".repeat(40)); //exibe * 40 vezes
const filaNormal =clientes.filter(cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) =>{
    console.log(`${i + 1}. ${fila.nome}`);
});