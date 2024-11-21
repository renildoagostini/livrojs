//cria referencia ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    //obtém o conteúdo dos campos
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    //Calculo do valor a pagar
    const pagar = Math.ceil(tempo / 15) * valor;

    resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`;
    
    e.preventDefault(); //evita o envio do form
})
