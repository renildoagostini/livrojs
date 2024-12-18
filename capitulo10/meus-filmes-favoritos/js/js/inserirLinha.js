export const inserirLinha = (titulo, genero, tabela) => {
    const linha = tabela.insertRow(-1); // adiciona uma linha à tabela

    const col1 = linha.insertCell(0); // cria colunas na linha inserida
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo; // joga um conteúdo em cada célula
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
};
