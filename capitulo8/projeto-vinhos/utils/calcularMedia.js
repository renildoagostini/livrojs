function calcularMedia(vinhos) {
    const titulo = require('./titulo');
    titulo("===<Media e Destaque do Cadastro de Vinho>===");

    const num = vinhos.length;
    if (num === 0) {
        console.log("Não há vinhos cadastrados.");
        return;
    }

    const total = vinhos.reduce((acc, vinho) => acc + vinho.preco, 0);
    const media = total / num;

    const vinhosOrdenados = [...vinhos].sort((a, b) => a.preco - b.preco);
    const menor = vinhosOrdenados[0];
    const maior = vinhosOrdenados[num - 1];

    console.log(`Preço médio dos vinhos R$: ${media.toFixed(2)}`);
    console.log(`Menor valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`Maior valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`);
}

module.exports = calcularMedia;
