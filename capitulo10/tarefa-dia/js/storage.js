// js/storage.js

export function salvarTarefas(tarefas) {
    let dados = tarefas.map(tarefa => tarefa.innerText).join(";");
    localStorage.setItem("tarefasDia", dados);
}

export function carregarTarefas() {
    const dados = localStorage.getItem("tarefasDia");
    return dados ? dados.split(";") : [];
}
