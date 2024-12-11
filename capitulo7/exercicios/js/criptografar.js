
//captura os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {          // "escuta" evento submit do form
    e.preventDefault()                             // evita envio do form
    const mensagem = frm.inMensagem.value          // conteúdo do campo
  
    let resposta = ""
    
  
    // laço para pegar as letras das posições pares (na programação, ímpares)
    for (let i = 1; i < mensagem.length; i = i + 2) {
      resposta += mensagem.charAt(i)
    }
  
    // laço para pegar as letras das posições ímpares (na programação, pares)
    for (let i = 0; i < mensagem.length; i = i + 2) {
      resposta += mensagem.charAt(i)
    }
  
    resp.innerText = resposta
  })

  