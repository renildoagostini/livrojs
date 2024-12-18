const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = [];

frm.addEventListener("submit", (e) =>{
e.preventDefault(); 

const modelo = frm.inModelo.value;
const preco = Number(frm.inPreco.value);

carros.push({modelo, preco});

frm.inModelo.value = "";
frm.inPreco.value = "";
frm.inModelo.focus();

frm.btListar.dispatchEvent(new Event("click"));

});


frm.btListar.addEventListener("click", () => {
    if(carros.length === 0){
        alert("Não há carros na lista");
        return;
    }

    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos carros cadastrados\n${"*".repeat(40)}\n${lista}`;
});

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    // Verificando se o valor informado é válido
    if (maximo === 0 || isNaN(maximo)) {
        return;
    }

    // Filtrando os carros que atendem ao critério de preço
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);

    // Verificando se há carros que atendem ao critério
    if (carrosFilter.length == 0) {
        alert("Não há carros com o preço inferior ou igual solicitado");
        return;
    }
    
    // Montando a lista de carros filtrados
    let lista = "";  // Mudando para let porque vamos concatenar valores

    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    
    // Criando uma linha de asteriscos para separar
    const linhaDeAsteriscos = "*".repeat(40);

    // Exibindo os resultados no elemento de resposta
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${linhaDeAsteriscos}\n${lista}`;
});

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("qual o percentual de desconto: "));

    if(desconto === 0 || isNaN(desconto)){
        return;
    }

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo, preco: aux.preco - ((aux.preco * desconto) / 100)
    }));

    let lista = "";
    for(const carro of carrosDesc){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }

    resp.innerText = `Carros com desconto: ${desconto}%\n${"*".repeat(40)}\n${lista}`;
});
