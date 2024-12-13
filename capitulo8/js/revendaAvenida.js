import { classificarVeiculo } from "../componentes/classificarVeiculos/index.js";
import {calcularEntrada} from "../componentes/calcularEntrada/index.js";


const frm = document.querySelector("form"); //obtém os elementos da página
const resp1 = document.querySelector("#outResp1"); //retorna os resultados
const resp2 = document.querySelector("#outResp2"); //retorna os resultados
const resp3 = document.querySelector("#outResp3"); //retorna os resultados

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do formulário

    //Obtém os conteúdos dos campos
    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);

    //Chama as funções e atribui
    const classificacao = classificarVeiculo(ano);
    const entrada = calcularEntrada(preco, classificacao);
    const parcelas = (preco - entrada) / 10;


    //exibe as respostas
    resp1.innerText = modelo + " - " + classificacao;
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de R$: ${parcelas.toFixed(2)}`;
});



