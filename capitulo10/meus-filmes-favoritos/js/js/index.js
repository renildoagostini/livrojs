import { inserirLinha } from "./inserirLinha.js";
import { gravarFilmes } from "./gravarFilmes.js";

const frm = document.querySelector("form"); // obtém os elementos da página
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulário

    const titulo = frm.inTitulo.value; // obtém o conteúdo digitado pelo usuário
    const genero = frm.inGenero.value;

    inserirLinha(titulo, genero, tbFilmes); // chama a função que insere filmes na tabela
    gravarFilmes(titulo, genero); // chama a função que grava dados no localStorage

    frm.reset(); // limpa os campos
    frm.inTitulo.focus(); // posiciona o cursor em título
});

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulo")) {
        const titulos = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i], tbFilmes);
        }
    }
});


tbFilmes.addEventListener("click", (e) => {
  // se a classe do elemento alvo clicado contém exclui
  if (e.target.classList.contains("exclui")) {
    // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
    const titulo = e.target.parentElement.parentElement.children[0].innerText

    if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
      // remove a linha da tabela, correspondente ao símbolo de excluir clicado
      e.target.parentElement.parentElement.remove()

      localStorage.removeItem("filmesTitulo") // exclui filmes salvos em...
      localStorage.removeItem("filmesGenero") // localStorage

      // salva novamente (se existir), acessando o conteúdo da tabela
      for (let i = 1; i < tbFilmes.rows.length; i++) {
        // obtém o conteúdo da tabela (coluna 0: título; coluna 1: gênero)
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText
        const auxGenero = tbFilmes.rows[i].cells[1].innerText
        gravarFilme(auxTitulo, auxGenero)   // chama gravarFilme com dados da tabela
      }
    }
  }
})