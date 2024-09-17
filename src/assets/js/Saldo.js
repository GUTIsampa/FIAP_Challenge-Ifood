if(typeof valorTabela === "undefined"){
    let valorTabela = document.querySelectorAll(".valorTabela");
    valorTabela.forEach(valor => {
        if (valor.textContent.trim().startsWith("-")) {
            valor.classList.add('negativos')
            console.log("Classe negativa");
        }else{
            valor.classList.add("positivos")
            console.log("Classe negativa");
        }
    });
}else{
    valorTabela.forEach(valor => {
        if (valor.textContent.trim().startsWith("-")) {
            valor.classList.add('negativos')
            console.log("Classe negativa");
        }else{
            valor.classList.add("positivos")
            console.log("Classe positiva");
        }
})}