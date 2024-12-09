const frm = document.querySelector("form"); //obtém os elementos da página
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) =>{ //"escuta" o evento submit do form
    e.preventDefault(); //evita o envio do form
    const fruta = frm.inFruta.value.toUpperCase(); //obtém o conteúdo dos campos em maiuscula
    let resposta = ""; //string que irá concatenar a resposta
    
    for(const letra of fruta){ //percorre todos os caracteres da fruta
        if(letra == fruta.charAt(0)){ //Se letra igual a letra inicial da fruta
            resposta += fruta.charAt(0); //adiciona a letra inicial
        }else{ //se não
            resposta += "_"; //adiciona o sublinhado
        }
    }
    resp.innerText = resposta;
    frm.inFruta.value = "*".repeat(fruta.length); //preenche com "*", conforme tamanho
})