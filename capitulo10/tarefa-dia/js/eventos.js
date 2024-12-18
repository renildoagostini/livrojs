// js/eventos.js

import { criarElementoTarefa, adicionarElementoAoQuadro } from "./dom.js";
import { salvarTarefas, carregarTarefas } from "./storage.js";

export function configurarEventos(form, quadro) {
    // Adicionar Tarefa
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarefa = form.inTarefa.value;
        const elemento = criarElementoTarefa(tarefa);
        adicionarElementoAoQuadro(elemento, quadro);

        form.inTarefa.value = "";
        form.inTarefa.focus();
    });

    // Selecionar Tarefa
    form.btSelecionar.addEventListener("click", () => {
        const tarefas = quadro.querySelectorAll("h4");
        if (tarefas.length === 0) {
            alert("Não há tarefas para selecionar");
            return;
        }

        let aux = -1;
        tarefas.forEach((tarefa, i) => {
            if (tarefa.className === "tarefa-selecionada") {
                tarefa.className = "tarefa-normal";
                aux = i;
            }
        });

        if (aux === tarefas.length - 1) aux = -1;
        tarefas[aux + 1].className = "tarefa-selecionada";
    });

    // Retirar Tarefa
    form.btRetirar.addEventListener("click", () => {
        const tarefas = quadro.querySelectorAll("h4");
        let aux = -1;

        tarefas.forEach((tarefa, i) => {
            if (tarefa.className === "tarefa-selecionada") aux = i;
        });

        if (aux === -1) {
            alert("Selecione uma tarefa para removê-la.");
            return;
        }

        if (confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) {
            quadro.removeChild(tarefas[aux]);
        }
    });

    // Gravar Tarefas
    form.btGravar.addEventListener("click", () => {
        const tarefas = quadro.querySelectorAll("h4");
        if (tarefas.length === 0) {
            alert("Não há tarefas a serem salvas.");
            return;
        }

        salvarTarefas([...tarefas]);
        alert("Tarefas salvas com sucesso!");
    });
}

export function carregarTarefasSalvas(quadro) {
    const tarefas = carregarTarefas();
    tarefas.forEach(tarefa => {
        const elemento = criarElementoTarefa(tarefa);
        adicionarElementoAoQuadro(elemento, quadro);
    });
}
