// Seleciona os dropdowns
if (typeof mesesDropdown === "undefined" && typeof anosDropdown === "undefined") {
  let mesesDropdown = document.querySelector('.mesInfo .dropdown:nth-child(1)');
  let anosDropdown = document.querySelector('.mesInfo .dropdown:nth-child(2)');
  let dataAtual = new Date();
  let mesAtual = dataAtual.getMonth();
  let meses = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
  ];
  document.getElementById("mesSelecionado").innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${meses[mesAtual]}`;
  let anoAtual = dataAtual.getFullYear();
  document.getElementById("anoSelecionado").innerHTML = `${anoAtual}`;
  // Adiciona os eventos de clique nos itens de cada dropdown
  mesesDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
      updateTitle(mesesDropdown, `<i class="fa-solid fa-calendar-days"></i> ${this.textContent}`);
    });
  });

  anosDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
      updateTitle(anosDropdown, this.textContent);
    });
  });

}


// Função para atualizar o título com base na seleção
function updateTitle(dropdown, selectedOption) {
  dropdown.querySelector('.selectedOption').innerHTML = selectedOption;
}







