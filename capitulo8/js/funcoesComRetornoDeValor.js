/*const situacao = (nota, media) =>{
    const resultado = nota >= media ? "Aprovado" : "Reprovado";
    return resultado;
}*/

const situacao = (nota, media) => nota >= media ? "Aprovado" : "Reprovado";

console.log(`A situação do aluno é: ${situacao(6, 7)}`);

