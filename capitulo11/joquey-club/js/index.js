const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

//nome dos cavalos participantes da corrida
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

//vetor que irá armazenar um objeto aposta(com nº da aposta e valor da aposta)
const apostas = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário

    const cavalo = Number(frm.inCavalo.value); // dados inserido no formulário
    const valor = Number(frm.inValor.value);

    //adicionar ao vetor objeto (atributos cavalo e valor)
    apostas.push({cavalo, valor});

    //variavel para exibir a lista das aposta realizada
    let lista = `Apostas Realizadas\n ${"-".repeat(25)}\n`;

    //percorre o vetor e concatena em lista as apostas realizadas
    for(const aposta of apostas){
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
    }
    respLista.innerText = lista; //obtém a lista das apostas

    frm.reset();
    frm.inCavalo.focus(); //posiciona o cursor no campo cavalo
});



frm.inCavalo.addEventListener("blur", () => {
    //se não preencheu o campo, limpa respCavalo e retorna
    //não existe mensagem de alerta, pois pode sair por um clique em ganhador
    if(frm.inCavalo.value == ""){
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(frm.inCavalo.value); //numero de cavalo convertido em numero
    if(!validarCavalo(numCavalo)){
        alert("Número de cavalo inválido");
        frm.inCavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo); //atribui retorno das funções à variável
    const contaNum = contarAposta(numCavalo);
    const total = totalizarAposta(numCavalo);

    //exibe nome, nª de aposta e total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
});

const obterCavalo = (num) => {
    const posicao = num - 1; //posicao no vetor (subtrai 1 pois inicia em 0)
    return CAVALOS[posicao]; //nome do cavalo da const CAVALOS
};

const validarCavalo = (num) => {
    //retorna o valor resultante da condição (true ou false)
    return num >= 1 && num <= CAVALOS.length;
};

const contarAposta = (num) => {
    let contador = 0;
    //percorre o vetor aposta
    for (const aposta of apostas){
        //verifica se a aposta é no cavalo passado como parametro
        if(aposta.cavalo == num){
            contador++; //conta + 1 quando a aposta for no cavalo do parametro
        }
    }
    return contador;
};

const totalizarAposta = (num) => {
    let total = 0;
    for(const aposta of apostas){
        if(aposta.cavalo == num){
            total += aposta.valor; //soma o valor das apostas
        }
    }
    return total; //retorna a soma dos valores das apostas
};

//quando o campo recebe o foco, limpa o conteudo e dados do cavalo
frm.inCavalo.addEventListener("focus", () => {
    frm.inCavalo.value = "";
    respCavalo.innerText = "";
});

frm.btResumo.addEventListener("click", () => {
    //vetor com vetores zerados para cada cavalo
    const somaApostas = [0, 0, 0, 0, 0, 0];

    //percorre aposta e acumula na posição do cavalo apostado(-1, pois inicia com 0)
    for(const aposta of apostas){
        somaApostas[aposta.cavalo -1] += aposta.valor;
    }

    //exibe o resultado
    let resposta = `Nº..........R$ Apostado\n${"-".repeat(35)}\n`;
    CAVALOS.forEach((cavalo, i) => {
        resposta += `${i + 1} ${cavalo.padEnd(20)}`;
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
    })
    respLista.innerText = resposta;
});

frm.btGanhador.addEventListener("click", () => {
    //solicita o número de cavalos ganhador (já converte para número)
    const ganhador = Number(prompt("Número do cavalo ganhador: "));

    //validar o preenchimento do prompt anterior
    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert("Cavalo invalido");
        return;
    }

    //uso do metodo reduce para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    //concatena em resumo o resultado a ser exibido na página
    let resumo = `Resultado final do páreo\n${"-".repeat(30)}`

    resumo += `Nº Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador Nº  ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    resumo += `Nº de Apostas: ${contarAposta(ganhador)}\n`;
    resumo += `Total Apostado R$: ${totalizarAposta(ganhador).toFixed(2)}`;

    respLista.innerText = resumo; //exibe o resultado

    frm.btApostar.disabled = true;
    frm.btGAnhador.disabled = true;
    frm.btNovo.focus(); //joga o foco no botao novo
});

//recarrega a página
frm.btNovo.addEventListener("click", () => window.location.reload());