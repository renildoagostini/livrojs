const teclado = require("prompt-sync")();

const numero = Number(teclado("Informe o número: "));

  // como 1 é um divisor universal, já iniciamos com ele
  let divisores = "Divisores do " + numero + ": 1";
  let soma = 1;

  // percorre os possíveis divisores e acumula
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i // vírgula + i (evita última vírgula)
      soma = soma + i
    }
  }
  divisores = divisores + " (Soma: " + soma + ")"

  // altera o conteúdo de outDivisores
  console.log(divisores);

  // verifica se é perfeito e exibe resposta na tag outResposta (resp2)
  if (numero == soma) {
   console.log(`${numero} É um Número Perfeito`);
  } else {
    console.log(`${numero} Não É um Número Perfeito`);
  }
