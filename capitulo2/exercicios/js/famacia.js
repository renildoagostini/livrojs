//cria referencia ao form e ao elementos h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) =>{
    //obtém os conteúdos dos campos
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    //calcula o valor da promoção
    const desconto = (Math.floor(preco)) * 2;

    //Exibe o resultado para o usuário
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas  R$: ${desconto.toFixed(2)}`;
   
    e.preventDefault();
})