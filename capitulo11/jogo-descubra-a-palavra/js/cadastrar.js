const frm = document.querySelector("form"); //Cria referência ao formulario

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário

    //obtém o conteúdo do campo (.trim() remove os espaços em brando no inicio e fim)
    const palavra = frm.inPalavra.value.trim();
    const dica = frm.inDica.value;

    //valida preenchimento (palavra não deve possuir espaços em branco no meio)
    if (palavra.includes(" ")) {
        alert("Informe uma palavra válida (Sem espaços");
        frm.inPalavra.focus();
        return;
    }
    //se já existe dados em localStorage, grava o conteúdo anterior + ";" + palavra / dica
    if (localStorage.getItem("jogoPalavra")) {
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra );
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + dica);
    }else{
        //senao, é a primeira inclusão, grava apenas a palavra/dica
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }

    //verifica se salvou
    if(localStorage.getItem("jogoPalavra")){
        alert(`Palavra ${palavra} cadastrada com sucesso`);
    }

    frm.reset(); //limpa o formulario
    frm.inPalavra.focus();

});
