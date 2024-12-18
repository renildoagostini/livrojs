export const gravarFilmes = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")) {
        const filmeTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        const filmeGenero = localStorage.getItem("filmesGenero") + ";" + genero;
        localStorage.setItem("filmesTitulo", filmeTitulo);
        localStorage.setItem("filmesGenero", filmeGenero);
    } else {
        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero);
    }
};

