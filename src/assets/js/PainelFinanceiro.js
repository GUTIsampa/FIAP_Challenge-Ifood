// Seleciona os dropdowns
const mesesDropdown = document.querySelector('.mesInfo .dropdown:nth-child(1)');
const anosDropdown = document.querySelector('.mesInfo .dropdown:nth-child(2)');

// Função para atualizar o título com base na seleção
function updateTitle(dropdown, selectedOption) {
  dropdown.querySelector('.selectedOption').innerHTML = selectedOption;
}

// Adiciona os eventos de clique nos itens de cada dropdown
mesesDropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    updateTitle(mesesDropdown, `<i class="fa-solid fa-calendar-days"></i> ${this.textContent}`);
  });
});

anosDropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    updateTitle(anosDropdown, this.textContent);
  });
});

const dataAtual = new Date();
const mesAtual = dataAtual.getMonth();
const meses = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
  ];
document.getElementById("mesSelecionado").innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${meses[mesAtual]}`;
const anoAtual = dataAtual.getFullYear();
document.getElementById("anoSelecionado").innerHTML = `${anoAtual}`;




