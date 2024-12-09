const palavra = "SenhA_123";

const vetor1 = palavra.match(/[a-z]/g); //e, n, h
const vetor2 = palavra.match(/[A-Z]/g); //S, A
const vetor3 = palavra.match(/[0-9]/g); //1, 2, 3
const vetor4 = palavra.match(/\w|_/g); //#, _, !
const vetor5 = palavra.match(/[T-Z]/g); //null


console.log(vetor1);
console.log(vetor2);
console.log(vetor3);
console.log(vetor4);
console.log(vetor5);