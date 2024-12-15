const teclado = require("prompt-sync")();

const vinhos =[];

function titulo(texto){
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

//programa principal
do{
    titulo (" ===<Cadastro de Vinhos>===");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisar por tipo");
    console.log("4. Media e Destaque");
    console.log("5. Finalizar");
    const opcao = Number(teclado("Opção: "));

    if(opcao === 1){
        incluir();
    }else if(opcao === 2){
        listar();
    }else if(opcao === 3){
        pesquisar();
    }else if(opcao === 4){
        calcularMedia();
    }else{
        break
    }
}while(true);

function incluir() {
    titulo("===<Inclusão de Vinhos>===");
    const marca = teclado("Marca...: ");
    const tipo = teclado("Tipo...: ");
    let preco = Number(teclado("Preço R$: "));

    vinhos.push({ marca, tipo, preco });
    console.log("Vinho cadastrado com sucesso");
}

function listar() {
    titulo("Listagem de Vinhos");
    if (vinhos.length === 0) {
        console.log("Nenhum vinho cadastrado.");
    } else {
        vinhos.forEach((vinho, index) => {
            console.log(`${index + 1}. Nome: ${vinho.nome}, Tipo: ${vinho.tipo}, Preço: R$ ${vinho.preco.toFixed(2)}`);
        });
    }
}


function pesquisar(){
    titulo("===<Pesquisar por Tipo de Vinho>===");

    const pesquisa = teclado("Tipo: "); //Lê tipo de vinho a pesquisar
    let contador = 0;
    console.log("Marca.........Tipo.........Preço R$:");

    for(const vinho of vinhos){
        if(vinho.tipo.toUpperCase().includes(pesquisa.toUpperCase())){
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` +  `${vinho.preco.toFixed(2).padStart(9)}`);
            contador++;
        }
    }
    //se percorreu todos os vinhos e contador continua 0, significa que não há
    if(contador === 0){
        console.log(`Não há vinhos cadastrados do tipo ${pesquisa}`);
    }
}

function calcularMedia(){
    titulo("===<Media e /destaque do Cadastro de Vinho>===");

    const num = vinhos.length; //obtém número do elemento do vetor
    if(num === 0){
        console.log("Não há vinhos cadastrado");
        return;
    }
    let total = 0; //para acumular o total
    for(const vinho of vinhos){
        total += vinho.preco
    }

    const media = total / num; //calcula o preço médio
    const vinhos2 = [...vinhos] //cria uma cópia do vetor original
    vinhos2.sort((a,b) => a.preco -b.preco); //ordena por preço

    const menor = vinhos2[0]; //menor preço é o primeiro
    const maior = vinhos2[num - 1]; //maior preço é o último

    console.log(`Preço médio dos vinhos R$: ${media.toFixed(2)}`);
    console.log(`Menor valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`Maior valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`);
}