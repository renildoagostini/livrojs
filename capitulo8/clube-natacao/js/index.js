import { gerarTracos } from './gerarTracos.js';
import { verCategoria } from './verCategoria.js';

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const atleta = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    resp.innerText = `${atleta}\n${gerarTracos(atleta)}\nCategoria: ${verCategoria(idade)}`;
});

