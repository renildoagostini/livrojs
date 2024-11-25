const teclado = require("prompt-sync")();

const fruta = teclado("Informe o nome da fruta: ");

const numero = teclado("Informe o número de frutas: ");

    let resposta = "";
    for(let i = 1; i <= numero - 1; i++){
            resposta += `${fruta} * `;
    }
    resposta += `${fruta} `;

    console.log(resposta);