const teclado = require("prompt-sync")();
const titulo = require('./utils/titulo');
const incluir = require('./utils/incluir');
const listar = require('./utils/listar');
const pesquisar = require('./utils/pesquisar');
const calcularMedia = require('./utils/calcularMedia');

const vinhos = [];

do {
    titulo("===<Cadastro de Vinhos>===");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisar por Tipo");
    console.log("4. Média e Destaque");
    console.log("5. Finalizar");
    const opcao = Number(teclado("Opção: "));

    if (opcao === 1) {
        incluir(vinhos, teclado);
    } else if (opcao === 2) {
        listar(vinhos);
    } else if (opcao === 3) {
        pesquisar(vinhos, teclado);
    } else if (opcao === 4) {
        calcularMedia(vinhos);
    } else {
        break;
    }
} while (true);
