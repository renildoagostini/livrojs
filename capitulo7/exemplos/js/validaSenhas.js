//obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const senha = frm.inSenha.value //obtém senha informada pelo usuario
    const erros = []; //vetor com erros

    //verifica se o tamanho da senha é invalido
    if(senha.length < 8 || senha.length > 15){
        erros.push("possuir entre 8 e 15 caracteres")
    }

    //verificar se não possui números
    if(senha.match(/[0-9]/g) === null){
        erros.push("possuir números(mínimo 1)");
    }

    //verifica se não possui letras minúsculas
    if(!senha.match(/[a-z]/g)){
        erros.push("possuir letras minúsculas(mínimo 1)");
    }

    //verifica se não possui letras maiúscula ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length === 1){
        erros.push("possuir letras maiúscula(mínimo 2)");
    }

    //verifica se não possui simbolos ou "_"
    if(!senha.match(/[\W|_]/g)){
        erros.push("possuir simbolos (no mínimo 1)")
    }

    //se o vetor está vazio( significa que não foram encontrados erros)
    if(erros.length === 0){
        resp.innerText = "Ok! Senha válida";
    }else{
        resp.innerText = `Erro...A senha deve ${erros.join(", ")}`;
    }
})

