const form = document.querySelector("form");
const outResposta = document.getElementById("outResposta");

form.addEventListener("submit", (e) =>{
    //evita o envio do formulario
    e.preventDefault();

    //Obtém o conteúdo dos campos do formulário
    const numero = Number(form.inNumero.value);

    let resposta = `Entre o número ${numero} e 1: `;

    for(let i = numero; i > 0; i--){
        if(i == 1){
            resposta = `${resposta}${i}.`;
        }else{
            resposta = `${resposta}${i}, `;
        }
    }
    outResposta.innerText = resposta;
    
});

addEventListener("reset", () => {
    outResposta.innerText = "";
});