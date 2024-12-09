const palavra = "Saladas";
const copia1 = palavra.charAt(2).toUpperCase() + palavra.substring(3);
const copia2 = palavra.substring(2, 4);
const copia3 = palavra.substring(0, palavra.length-1);

const posicao1 = palavra.indexOf("a"); //retorna 1
const posicao2 = palavra.lastIndexOf("a");//retorna 5
const posicao3 = palavra.indexOf("sal");//retorna 0
const posicao4 = palavra.indexOf("e");//retorna -1
const existe = palavra.includes("d"); //retorna true

console.log(copia1);
console.log(copia2);
console.log(copia3);

console.log(posicao1);
console.log(posicao2);
console.log(posicao3);
console.log(posicao4);
console.log(existe);


