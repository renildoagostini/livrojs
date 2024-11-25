const frm = document.querySelector("form");
const pre = document.querySelector("pre");

frm.addEventListener('submit', (e) => {
e.preventDefault();

let numeroConchichilas = Number(frm.inConchichilas.value);
let numeroAno = Number(frm.inAno.value);

let resposta = "";


let total = numeroConchichilas;

for( let i = 1; i <= numeroAno; i++){      
          
        resposta += `${i}ª ano: ${total} Conchichilas\n`;
        total = total * 3;   
}

pre.innerText = resposta;
});