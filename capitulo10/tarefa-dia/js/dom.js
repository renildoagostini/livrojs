// js/dom.js

export function criarElementoTarefa(tarefa) {
    const h4 = document.createElement("h4"); // cria o elemento h4
    const texto = document.createTextNode(tarefa); // cria o texto
    h4.appendChild(texto);
    return h4; // retorna o elemento criado
}

export function adicionarElementoAoQuadro(elemento, quadro) {
    quadro.appendChild(elemento); // adiciona elemento ao quadro
}
