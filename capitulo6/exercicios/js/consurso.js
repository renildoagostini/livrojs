const form = document.querySelector("form");
const pre = document.querySelector("pre");

const candidatos = []; //cria o vetor global

//cria o evento ao botão submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const nome = form.inNome.value; //obtém o conteúdo do campo candidato
    const acertos = Number(form.inAcertos.value); //obtém o conteúdo do campo nº acertos

    candidatos.push({nome, acertos}); //Adiciona dados ao vetor objetos
    form.inNome.value = ""; //Limpa o campo candidato
    form.inAcertos.value = ""; //Limpar o campo nº candidatos
    form.inNome.focus();

    //dispara um evento de click em brListar (equivalente ao botão clicar da página
    form.btListar.dispatchEvent(new Event("click"));
})

form.btListar.addEventListener("click", () => { //escuta o evento click
    if(candidatos.length === 0){ //Se o tamanho do vetor for zero dispara um alert
        alert("Não há candidatos na lista");
        return;
    }

    //método reduce() concatena uma string, obtendo nome do candidato e número de acertos
    const lista = candidatos.reduce((acumulador, candidato) =>  acumulador + candidato.nome + " - " + candidato.acertos + " Acerto(s)\n", "");
    pre.innerText = `Lista dos candidatos com números de acertos\n${"-".repeat(40)}\n${lista}`;
})

form.btAprovados.addEventListener("click", () => {
    const informarAcertos = Number(prompt("Informe o número de acertos necessários para o candidato ir para 2ª etapa do concurso."));

    if(informarAcertos === 0 || isNaN(informarAcertos)){ //se não informou ou valor inválida
        return; //retorna
    }

    //cria um vetor de objetos que atendem a condição do filtro
    const candidatosFilter = candidatos.filter(candidato => candidato.acertos >= informarAcertos);
    if(candidatosFilter.length === 0){
        alert("Não há candidatos aptos para a segunda etapa do concurso");
        return; //retorna
    }

    let lista = "";
    for(const candidato of candidatosFilter){ //percorre os elementos do array
        lista += `${candidato.nome} - ${candidato.acertos}\n`;
    }

    pre.innerText = `Lista de candidatos aprovados para a 2ª etapa do concurso\n ${"-".repeat(40)}\n${lista}`;
})