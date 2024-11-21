//cria referência ao formulário e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


//cria "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obtém o conteúdo dos campos
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = frm.inAltura.value;

    //declara a variavel peso
    /*let peso;

    //se masculino (ou, se o botão masculino foi clicado);
    if(masculino){
        peso = 22 * Math.pow(altura, 2); //a mesmo que altura * altura
    }else{
        peso = 21 * Math.pow(altura, 2);
    }*/

    let peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);
   

    //apresenta a resposta (altera o conteudo do h3)
    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(2)}`;
});


//ouvinte para limpar a saida
addEventListener("reset", () => {
    resp.innerText = "";
})

