import {validarNome} from './validarNome.js';
import { contarVogais } from './contarVogais.js';
import { obterSobrenome } from './obterSobrenome.js';


const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do formulario

    const aluno = frm.inAluno.value;

    //validação do nome
    if(!validarNome(aluno)){
        alert("Informe o nome completo do aluno");
        frm.inAluno.value.focus();
        return;
    }

    resp.innerText = `Senha Inicial: ${obterSobrenome(aluno)} ${contarVogais(aluno)}`;
    });


    

    
      
      
