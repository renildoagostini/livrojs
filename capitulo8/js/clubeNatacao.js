const frm = document.querySelector("form")      // obtém elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                     // evita envio do form

  const atleta = frm.inNome.value
  const idade = Number(frm.inIdade.value)

  //const sublinhado = gerarTracos(atleta)
  //const categoria = verCategoria(idade)

  resp.innerText = atleta + "\n" + gerarTracos(atleta) + "\nCategoria: " + verCategoria(idade)
})

const gerarTracos = nome => {
    let tracos = ""; // inicializa uma string vazia
  
    for (const letra of nome) { // percorre cada letra do nome
      if (letra !== " ") { // se não for um espaço
        tracos += "-"; // adiciona um traço
      } else {
        tracos += " "; // mantém o espaço
      }
    }
  
    return tracos; // retorna a string de traços
  };
  

const verCategoria = idade => {
  let cat
  if (idade <= 12) {
    cat = "Infantil"
  } else if (idade <= 18) {
    cat = "Juvenil"
  } else {
    cat = "Adulto"
  }
  return cat
}