function incluir(vinhos, teclado) {
    const titulo = require('./titulo');
    titulo("===<Inclusão de Vinhos>===");
    const marca = teclado("Marca...: ");
    const tipo = teclado("Tipo...: ");
    const preco = Number(teclado("Preço R$: "));

    vinhos.push({ marca, tipo, preco });
    console.log("Vinho cadastrado com sucesso");
}

module.exports = incluir;
