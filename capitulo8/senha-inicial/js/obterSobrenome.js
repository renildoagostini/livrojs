export const obterSobrenome = nome => {
    const ultimoEspaco = nome.lastIndexOf(" ")
    return nome.substr(ultimoEspaco + 1).toLowerCase()
  }