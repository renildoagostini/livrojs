const teclado = require("prompt-sync")();

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair");
const alunos = []; //declara o vetor

do{
    const nome = teclado("Nome: ") //lê o nome
    if(nome ==="Fim"){ //Antes de ler a nota, verifica
        break //sai da repetição
    }
    const nota = Number(teclado("Nota: ")); //lê a nota
    alunos.push({nome, nota}); //Adiciona dados ao vetor de objetos
    console.log("aluno(a) cadastrado(s)");
}while(true);

console.log("*".repeat(50));

const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0); //obtém a maior nota
console.log(`maior nota: ${maior}`); //exibe a maior nota

if(maior >= 7){ //para verificar se tem destaque na turma
    const destaques = alunos.filter(aluno => aluno.nota === maior); //filtro
    for(const destaque of destaques){ //percorre os alunos em destaque
        console.log(`- ${destaque.nome}`); //mostra nomes
    }
}else{
    console.log("Não há alunos em destaque na turma");
}