function pesquisar(vinhos, teclado) {
    const titulo = require('./titulo');
    titulo("===<Pesquisar por Tipo de Vinho>===");

    const pesquisa = teclado("Tipo: ");
    let contador = 0;
    console.log("Marca.........Tipo.........Preço R$:");

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesquisa.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + `${vinho.preco.toFixed(2).padStart(9)}`);
            contador++;
        }
    }

    if (contador === 0) {
        console.log(`Não há vinhos cadastrados do tipo ${pesquisa}`);
    }
}

module.exports = pesquisar;
