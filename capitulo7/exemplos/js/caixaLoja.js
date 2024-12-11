const frm = document.querySelector("form");    // obtém elementos da página

//const TAXA_MULTA =   1.87;                    // multa por atraso
const TAXA_JUROS = 0.03           // juros por dia de atraso

frm.addEventListener("submit", (e) => {
  e.preventDefault()                            // evita envio do form
  const dataVencimento = frm.inDataVencimento.value
  const valor = Number(frm.inValorConta.value);
  const hoje = new Date()                       // cria variáveis (instancia objetos)
  const vencimento = new Date()                     // do tipo Date()

  const partes = dataVencimento.split("-")            // data vem no formato aaaa-mm-dd
  vencimento.setDate(Number(partes[2]))
  vencimento.setMonth(Number(partes[1]) - 1)
  vencimento.setFullYear(Number(partes[0]))

  const atraso = hoje - vencimento     // calcula a diferença de dias entre datas (em ms)
  let multa = 0                    // inicializa multa e juros com 0
  let juros = 0

  if (atraso > 0) {                       // se conta estiver em atraso ...
    // converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
    const dias = atraso / 86400000
    multa = 1.87          // calcula multa e juros
    juros = TAXA_JUROS * dias
  }
  const total = valor + multa + juros     // calcula o total

  frm.outMulta.value = multa.toFixed(2)   // exibe os valores com 2 decimais
  frm.outJuros.value = juros.toFixed(2)
  frm.outTotal.value = total.toFixed(2)
});