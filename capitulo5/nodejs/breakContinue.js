const teclado = require("prompt-sync")();

console.log("Digite 0 para sair");

do {
    const numero = Number(teclado("Número: "));
    
    if (numero === 0 || isNaN(numero)) {
        const sair = teclado("Confirma saída? (sim/não): ").toLowerCase();
        if (sair === "sim") {
            break;
        } else {
            continue;
        }
    }

    if (numero % 2 === 0) {
        console.log(`O dobro de ${numero} é: ${numero * 2}`);
    } else {
        console.log(`O triplo de ${numero} é: ${numero * 3}`);
    }
} while (true);

console.log("Bye, Bye....");
