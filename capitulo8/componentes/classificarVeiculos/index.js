//Função que recebe o ano do veículo como parâmetro
export const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear(); //obtém o ano atual

    let classif;

    if(ano === anoAtual){
        classif = "Novo";
    }else if(ano === anoAtual - 1 || ano === anoAtual - 2){
        classif = "Seminovo";
    }else{
        classif = "Usado";
    }
    return classif;
}


