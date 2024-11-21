//cria  referência ao form e ao elemento h2
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

//Cria "ouvinte" para o botão submit ao ser clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obtém os dados do campo número
    const numero = Number(frm.inNumero.value);

    //calcula a raiz quadrada
    const raiz = Math.sqrt(numero);

    //Verifica se a raiz quadrada é perfeita
    if(Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}`;
    }else{
        resp.innerText = `Não há raiz exata para o número ${numero}`;
    }

    
});