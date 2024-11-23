const prompt = require("prompt-sync")();

const numero = Number(prompt("Número: "));

let resposta = "";

    for(let i = 1; i <= 10; i++){
       resposta += numero + " x " + i + " = " + (numero * i) + "\n";
       
    }

    console.log(resposta);
    


