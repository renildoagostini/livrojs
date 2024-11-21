// cria referência ao form e elementos onde será exibida a saída de dados
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria ouvinte para o evento submit do form ao ser clicado
frm.addEventListener("submit", (e) => {
    // evita o envio do formulário
    e.preventDefault();

    // obtém o valor do saque
    const saque = Number(frm.inValorSaque.value);

    // Se saque não é múltiplo de 10
    if (saque % 10 !== 0) {
        alert(`Valor inválido para notas disponíveis (R$10, 50, 100)`);
        frm.inValorSaque.focus();
        return;
    }

    // calcula notas de 100
    const notasCem = Math.floor(saque / 100);

    // quanto sobra para pagar
    let resto = saque % 100;

    // calcula notas de 50
    const notasCinquenta = Math.floor(resto / 50);

    // quanto ainda sobra
    resto = resto % 50;

    // calcula notas de 10
    const notasDez = Math.floor(resto / 10);

    // exibe notas se houver
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`;
    } else {
        resp1.innerText = ""; // Limpa a saída se não houver notas
    }

    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
    } else {
        resp2.innerText = ""; // Limpa a saída se não houver notas
    }

    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`;
    } else {
        resp3.innerText = ""; // Limpa a saída se não houver notas
    }
});
