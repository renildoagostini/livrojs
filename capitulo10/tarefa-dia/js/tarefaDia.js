// js/tarefaDia.js

import { configurarEventos, carregarTarefasSalvas } from "./eventos.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const quadro = document.querySelector("#divQuadro");

    // Configurar eventos
    configurarEventos(form, quadro);

    // Carregar tarefas do localStorage, se existirem
    carregarTarefasSalvas(quadro);
});
