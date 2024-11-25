const teclado = require("prompt-sync")();

const valorCompra = Number(teclado("Informe o valor da compra R$: "));
const numeroParcelas = Number(teclado("Informe o número de parcelas: "));

const valorParcelas = Math.floor(valorCompra / numeroParcelas);

const ultimaParcela = valorParcelas + (valorCompra % numeroParcelas);


for(let i = 1; i < numeroParcelas; i++){
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${numeroParcelas}ª parcela: R$ ${ultimaParcela.toFixed(2)}`);