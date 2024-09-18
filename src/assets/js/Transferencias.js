if(typeof valorTabela === "undefined"){
    let valorTabela = document.querySelectorAll(".valorTabela");
    valorTabela.forEach(valor => {
        if (valor.textContent.trim().startsWith("-")) {
            valor.classList.add('negativos')
        }else{
            valor.classList.add("positivos")
        }
    });
}else{
    valorTabela.forEach(valor => {
        if (valor.textContent.trim().startsWith("-")) {
            valor.classList.add('negativos')
        }else{
            valor.classList.add("positivos")
        }
})}
