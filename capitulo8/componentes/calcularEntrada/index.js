//função que recebe o valor e o status do veículo como parâmetro
export const calcularEntrada = (preco, classificacao) => 
    classificacao === "Novo" ? preco * 0.5 : preco * 0.3;

