const teclado = require("prompt-sync")();

let resposta = ""; // Variável para armazenar todas as descrições e valores das contas
let numeroConta = 0; // Contador de contas
let valorTotal = 0; // Total acumulado

while (true) {
    const descricao = teclado("Informe a descrição da conta: ");
    const valor = Number(teclado("Informe o valor da conta R$: "));

    if (isNaN(valor) || valor <= 0) {
        console.log("Por favor, insira um valor válido para a conta.");
        continue;
    }

    // Incrementa o número da conta
    numeroConta++;

    // Soma o valor da conta ao total acumulado
    valorTotal += valor;

    // Atualiza a resposta com os detalhes da conta
    resposta += `Conta ${numeroConta}: ${descricao} - R$: ${valor.toFixed(2)}\n`;

    // Pergunta ao usuário se deseja adicionar outra conta
    const continuar = teclado("Deseja adicionar outra conta? (sim/não): ").toLowerCase();
    if (continuar === "não" || continuar === "nao") {
        break;
    }
}

// Exibe todas as contas inseridas e o total acumulado
console.log("\n=== Resumo das Contas ===");
console.log(resposta);
console.log(`Valor total: R$: ${valorTotal.toFixed(2)}`);



    
