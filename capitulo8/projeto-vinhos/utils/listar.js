function listar(vinhos) {
    const titulo = require('./titulo');
    titulo("Listagem de Vinhos");

    if (vinhos.length === 0) {
        console.log("Nenhum vinho cadastrado.");
    } else {
        vinhos.forEach((vinho, index) => {
            console.log(`${index + 1}. Marca: ${vinho.marca}, Tipo: ${vinho.tipo}, Preço: R$ ${vinho.preco.toFixed(2)}`);
        });
    }
}

module.exports = listar;
