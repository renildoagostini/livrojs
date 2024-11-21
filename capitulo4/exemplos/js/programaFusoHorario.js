//cria referência ao form e ao elemento h2
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

//cria "ouvinte" de evento quando o botao submit for clicado

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();

    //obtém o conteúdo do campo Hora no Brasil
    const horaBrasil = Number(frm.inHoraBrasil.value);

    //calcula o horário na frança
    let horaFrança = horaBrasil + 5;

    //Se passa das 24 horas na frança (subtrai 24)
    if(horaFrança > 24){
        horaFrança += - 24;
    }
    resp.innerText = `Hora na frança ${horaFrança.toFixed(2)}`;

    addEventListener("reset", () => {
        resp.innerHTML = "";
    })
});