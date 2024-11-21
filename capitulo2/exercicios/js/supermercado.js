//Cria referência ao form e aos botãos h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

//cria ouvinte  de evento, adicionando quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    //obtem o conteúdo dos campos
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    //calcula a promoção
    const desconto = preco / 2;
    const promocao = (preco * 2) + (desconto);

    resp1.innerText= `${produto} - Promoção: leve 3 por R$: ${promocao.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`;

    //evita o envio do formulario
    e.preventDefault();
})