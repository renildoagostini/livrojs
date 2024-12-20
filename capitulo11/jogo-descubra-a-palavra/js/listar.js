const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");

const mostrarTabela = () => {
    // Se houver dados salvos em localStorage
    if (localStorage.getItem("jogoPalavra") && localStorage.getItem("jogoDica")) {
        // Obtém o conteúdo e converte em elementos de vetor (na ocorrência ";")
        const palavras = localStorage.getItem("jogoPalavra").split(";");
        const dicas = localStorage.getItem("jogoDica").split(";");

        // Percorre elementos do vetor e os insere na tabela
        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1); // adiciona uma linha na tabela

            const col1 = linha.insertCell(0); // cria colunas nas linhas inseridas
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i]; // joga o conteúdo em cada célula
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='excluir' title='Excluir'>&#128465;</i>";

            // Configura o cursor como pointer para o ícone de exclusão
            col3.querySelector(".excluir").style.cursor = "pointer";
        }
    }
};

// Executa quando o checkbox é alterado. Exibe a lista se marcado, senão recarrega
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? mostrarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
    // Se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("excluir")) {
        // Acessa a linha da tabela correspondente
        const palavra = e.target.closest("tr").children[0].innerText;

        if (confirm(`Confirma a exclusão da palavra: "${palavra}"?`)) {
            // Remove a linha da tabela correspondente
            e.target.closest("tr").remove();

            localStorage.removeItem("jogoPalavra"); // excluí dados do localStorage
            localStorage.removeItem("jogoDica");

            const palavras = [];
            const dicas = [];

            // Obtém os dados da tabela, acrescentando-os aos vetores
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // Salva o conteúdo dos vetores em localStorage
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});
