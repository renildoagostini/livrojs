  const nome = ["Renildo", "Estevão", "Ana", "Esther"];

  nome.sort(); //ordena o verto em ordem alfabetica

  console.log(nome.join(", "));

  nome.reverse();

  console.log(nome.join(", "));

  const retira = nome.splice(2,2); //
  console.log(retira);

  const lista = nome.slice(0,-1);

  const numeros = [50, 100, 2];

  numeros.sort();

  console.log(numeros.join(", "));

  numeros.sort((a,b) => a - b);

  console.log(numeros.join(", "));

