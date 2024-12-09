const senha = "ABACAD";

const senha1 = senha.replace("A", "X"); //troca o primeiro "A"
const senha2 = senha.replace(/A/g, "X") //troca todos os "As"


console.log(`${senha} => ${senha1}`);
console.log(`${senha} => ${senha2}`);

const app = "App Controle Financeiro";
const app2 = app.replace(" ", "") //tira o espaço entre APP e Controle
const app3 = app.replace(/ /g, ""); //tira todos os espaços
const app4 = app.replace(/ /g, "").toLowerCase(); //tira todos os espaço e passa para caixa baixa

console.log(`${app} => ${app2}`);
console.log(`${app} => ${app3}`);
console.log(`${app} => ${app4}`);
