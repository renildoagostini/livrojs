const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = []; //declara um vetor global

frm.addEventListener("submit", (e) => { //escuta o evento submit do form
    e.preventDefault(); //Evita o envio do form

    const nome = frm.inClube.value; //obtém o nome do clube através do campo inClube

    clubes.push(nome); //adiciona o clube no vetor de clubes

    frm.reset(); //limpa o campo do input inClube após o botão Adicionar ser clicado
    frm.inClube.focus(); //Posiciona o cursor no campo inClube após a tela ser limpa
    frm.btListar.dispatchEvent(new Event("click"));

});

frm.btListar.addEventListener("click", () => { //Aciona clique em btListar
    if (clubes.length === 0) { //se o vetor estiver vazio
        alert('Não há clubes na lista');
        frm.inClube.focus();
        return;
    }
    let lista = ""; // Inicializa a variável lista
    for (let i = 0; i < clubes.length; i++) {
        lista += `${clubes[i]}\n`; // Adiciona os clubes com numeração
    }
    resp.innerText = lista; // Exibe a lista no elemento <pre>
});

frm.btTabela.addEventListener("click", () => {
    if (clubes.length === 0) { // Verifica se o vetor está vazio
        alert('Não há clubes na lista');
        frm.inClube.focus();
        return;
    }

    let inverso = [...clubes].reverse();
    let tabela = ""; // Inicializa a variável tabela

    for (let i = 0; i < clubes.length / 2; i++) {
        
            tabela += `${clubes[i]} X ${inverso[i]}\n`; // Cria os confrontos
      
    }

    resp.innerText = tabela; // Exibe a tabela no elemento <pre>
});
