const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    //evita o envio do form
    e.preventDefault();

    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
    const velocidadeConduto = Number(frm.inVelocidadeCondutor.value);

    let velocidade;
    let multaLeve = velocidadePermitida + (velocidadePermitida * 0.2);

    if(velocidadeConduto <= velocidadePermitida){
        velocidade = `situação: Sem multa`
    }else if(velocidadeConduto <= multaLeve){
        velocidade = `situação: Multa Leve`;
    }else{
        velocidade = `situação: Multa Grave`;
    }

    resp.innerText = velocidade;
});

addEventListener("reset", () => {
    resp.innerText = "";
})