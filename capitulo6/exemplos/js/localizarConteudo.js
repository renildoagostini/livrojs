const idades = [5, 6, 8, 3, 6, 9];
console.log(idades.indexOf(6)); //retorna 1, pois lê o vetor do inicio para o fim
console.log(idades.lastIndexOf(6))//retorna 4, pois lê o vetor do fim para o inicio
console.log(idades.indexOf(7))//retorna -1, pois não encontrou o elemento no vetor
console.log(idades.includes(3));  // retorna true caso o elemento exista no vetor