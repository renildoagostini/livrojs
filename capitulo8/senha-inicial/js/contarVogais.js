export const contarVogais = nome => {
    let num = 0
    for (const letra of nome) {
      const letraUC = letra.toUpperCase()
      if (letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U") {
        num++
      }
    }
    return num < 10 ? "0" + num : num
  }
  
  // outra forma de programar a função contarVogais()
  export const contarVogais2 = nome => {
    let num = 0
    const vogais = "AEIOU"
    for (const letra of nome) {
      const letraUC = letra.toUpperCase()
      if (vogais.includes(letraUC)) {
        num++
      }
    }
    return num < 10 ? "0" + num : num
  }