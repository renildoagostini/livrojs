//Cria referencia ao form e ao elemento h2
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //obtém o conteúdo dos campos    
    const preco = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    //calcula o valor a ser pago
    const valor = (preco/1000) * consumo;

    //exibe as respostas
    resp.innerText = `Valor a pagar R$: ${valor}`;

    e.preventDefault();
})