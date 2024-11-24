const form = document.querySelector("form");
const outResposta1 = document.querySelector("#outResposta1");
const outResposta2 = document.querySelector("#outResposta2");

let resposta = "";
let numeroConta = 0;
let valorTotal = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let descricao = form.inDescricao.value;
    let valor = Number(form.inValor.value);

    numeroConta++;
    valorTotal = valorTotal + valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    outResposta1.innerText = resposta + "----------------------------";
    outResposta2.innerText = numeroConta + " - conta(s)" + valorTotal.toFixed(2);

    form.inDescricao.value = "";
    form.inValor.value = "";
    form.inDescricao.focus();
});