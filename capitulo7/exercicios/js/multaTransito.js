const frm = document.querySelector("form"); // obtém elementos da página
const resp1 = document.querySelector("#outDataLimite");
const resp2 = document.querySelector("#outValorDesconto");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // evita envio do form

  const data = new Date(frm.inData.value); // cria objeto Date diretamente
  const valor = Number(frm.inValor.value);

  // Adiciona 90 dias à data
  data.setDate(data.getDate() + 90);

  // Formata data (dia/mês/ano com 2 dígitos)
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  // Calcula o valor com desconto
  const comDesconto = valor * 0.8;

  // Exibe as respostas
  resp1.innerText = `Data Limite para Pagto com Desconto: ${dia}/${mes}/${ano}`;
  resp2.innerText = `Valor com Desconto R$: ${comDesconto.toFixed(2)}`;
});
