const teclado = require("prompt-sync")();

const numero = Number(teclado("Informe o número: "));

// como 1 é um divisor universal, já iniciamos com ele
let divisores = "Divisores do " + numero + ": 1";


// percorre os possíveis divisores
for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i // vírgula + i (evita última vírgula)
     
    }
  }

  // altera o conteúdo de outDivisores
  console.log(divisores);
