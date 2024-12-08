const frm = document.querySelector("form");
const outOrdem = document.querySelector("#outOrdem");
const outResposta = document.querySelector("#outResposta");

const numeros = []; //declara um vetor global


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if(numeros.includes(numero)){
        alert("Número já foi adicionado");
        frm.inNumero.focus();
        return;
    }

    numeros.push(numero);

    const lista = `Números: ${numeros.join(", ")}`;   
    outResposta.innerText = lista;   
});

frm.btValidar.addEventListener("click", () => {
    // Verifica se os números estão em ordem crescente
    //const numerosOrdenados = [...numeros].sort((a, b) => a - b); // Cria uma cópia ordenada
    if (JSON.stringify(numeros) === JSON.stringify([...numeros].sort((a, b) => a - b))) {
        outOrdem.innerText = "Os números estão em ordem crescente.";
    } else {
        outOrdem.innerText = "Os números não estão em ordem crescente.";
    }
});
