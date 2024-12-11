const hoje = new Date();
//const amanha = new Date();
const dia = hoje.getDate();

hoje.setDate(dia + 1);

console.log(`Hoje: ${hoje}\nAmanhã: ${dia}`);