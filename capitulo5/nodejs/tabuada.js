const teclado = require("prompt-sync")();

console.log("\n");

const numero = Number(teclado("Número: "));

 console.log("\n");

let resposta = "";

for (let i = 1; i <= 10; i++) {
    // Formata o multiplicador e o resultado para ficarem alinhados
    const multiplicador = i.toString().padStart(2, ' ');
    const resultado = (numero * i).toString().padStart(4, ' ');
    resposta += `${numero} x ${multiplicador} = ${resultado}\n`;
}

console.log(resposta);

    


