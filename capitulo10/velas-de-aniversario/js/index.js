const frm = document.querySelector("form")// obtém elementos da página
const dvIdade = document.querySelector("#divAniversario")

frm.addEventListener("submit", (e) => {
  e.preventDefault()// evita envio do form

  const idade = Number(frm.inIdade.value)

  const strIdade = idade.toString()

  for (let i = 0; i < strIdade.length; i++) {
    const img = document.createElement("img");
    img.src = `/img/${strIdade[i]}.jpg`; // Corrigido para incluir o fechamento correto do template string
    img.alt = `Vela de ${strIdade[i]} anos`; // Adicionado "anos" ao texto alternativo
    dvIdade.appendChild(img);
}

  btExibir.disabled = true
})

frm.addEventListener("reset", () => {
  location.reload()
})