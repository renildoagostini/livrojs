//cria referencia ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria "ouvinte" de evento, acionado quando o botão submit é clicado

frm.addEventListener("submit", (e) => {
//obtém os dados dos campos de entrada
nome = frm.inNome.value;
nota1 = Number(frm.inNota1.value);
nota2 = Number(frm.inNota2.value);

//calculo das médias
const media = (nota1 + nota2) / 2;

//condição de aprovado ou reprovado
if(media >= 7){
    resp2.innerText = `Parabéns ${nome} você foi aprovado`;
    resp2.style.color = "blue";
}else if(media >= 4){
    resp2.innerText = `Atenção! ${nome} você está em recuperação`;
    resp2.style.color = "green";
}else{
    resp2.innerText = `Ops....! ${nome} você foi reprovado`;
    resp2.style.color = "red";
}

//saída de dados
resp1.innerText = `Média das Notas ${media.toFixed(2)}`;


//evita o envio do form
e.preventDefault();
});