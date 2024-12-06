const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = []; //cria um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const nome = frm.inNome.value; //obtém o conteúdo do campo nome da criança
    const idade = Number(frm.inIdade.value) //Obtém o conteúdo do campo idade

    if(idade >= 0 && idade < 18){
        criancas.push({nome, idade}); //Adiciona os dados ao vetor de objeto
    frm.reset() //Limpa os campos do form

    frm.inNome.focus(); //posiciona o vetor no campo Nome da Criança

    frm.btListar.dispatchEvent(new Event("click")); //dispara click em btListar
    }else{
        alert("Favor digitar uma idade entre 0 e 18 anos");
        frm.reset() //Limpa os campos do form

        frm.inNome.focus(); //posiciona o vetor no campo Nome da Criança
    }
    
});

frm.btListar.addEventListener("click", () => {
    if(criancas.length === 0){  //verifica se a lista está vazia, se sim dispara alert
        alert("Não há crianças na lista");
        return;
    } 

    let lista = ""; //para concatenar lista de crianças
    for(const crianca of criancas){
        const {nome, idade} = crianca;  //desestrutura objetos
        lista += nome + " - " + idade + " Anos\n";
    }
    resp.innerText = lista; //exibe a lista

    
});

frm.btResumir.addEventListener("click", () => {
    if(criancas.length === 0){  //verifica se a lista está vazia, se sim dispara alert
        alert("Não há crianças na lista");
        return;
    } 

    const copia = [...criancas] // faz uma copia do vetor criancas
    copia.sort((a,b) => a.idade - b.idade); //ordenar por idades

    let resumo = ""; // Para concatenar a saída
    let aux = copia[0].idade; // Idade inicial (menor idade)
    let nomes = []; // Para armazenar os nomes de cada idade

   for (const crianca of copia) {
    const { nome, idade } = crianca;
    if (idade === aux) { // Se for da mesma idade
        nomes.push(nome); // Adiciona o nome ao vetor
    }else{ //se não, monta um resumo de cada idade
        resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
        resumo += "(" + nomes.join(", ") + ")\n\n";
        aux = idade //obtém a nova idade na ordem
        nomes = []; //limpa o vetor de nomes
        nomes.push(nome); // adiciona o primeiro da nova idade
    }
   }

   //adiciona a última criança
    resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
    resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
    resumo += `(${nomes.join(", ")})\n\n`;

    resp.innerText = resumo; // Exibe o resumo
})