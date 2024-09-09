// pageScript.js





document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('a[data-page]');
    
    
    // Função para carregar o conteúdo
    function loadContent(page) {
        fetch(`/src/assets/pages/${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar a página: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                const contentDiv = document.getElementById('content');
    
                // Limpa o conteúdo antigo, incluindo scripts
                contentDiv.innerHTML = '';
    
                // Cria um elemento temporário para parsear a nova página
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
    
                // Adiciona o novo conteúdo ao 'content'
                contentDiv.innerHTML = tempDiv.innerHTML;
    
                // Adiciona os scripts da nova página dentro do 'content'
                const scripts = tempDiv.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    if (script.src) {
                        // Se o script tiver um src, cria um novo elemento script com src
                        newScript.src = script.src;
                    } else {
                        // Se o script tiver código inline, adiciona o código ao novo elemento script
                        newScript.textContent = script.textContent;
                    }
                    // Adiciona o novo script ao 'contentDiv'
                    contentDiv.appendChild(newScript);
                });
    
                // Atualiza o título
                document.getElementById("titulo").textContent = `${page}`;
    
                updateActiveLink(page);
            })
            .catch(error => {
                document.getElementById('content').innerHTML = `<p class="text-danger">Ocorreu um erro ao carregar o conteúdo.</p>`;
                console.error(error);
            });
    }
    
    


    
    // Função para atualizar o link ativo na navegação
    function updateActiveLink(activePage) {
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === activePage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Adiciona event listeners aos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    
    // Carrega o conteúdo inicial (Painel Financeiro)
    loadContent('PainelFinanceiro');
});

function selectNavItem(element) {
    // Remove a classe 'nav-bar-active' de todos os itens
    var items = document.querySelectorAll('.nav-item');
    items.forEach(function(item) {
        item.classList.remove("border-bottom","border-2");
    });

    // Adiciona a classe 'nav-bar-active' ao item clicado
    element.classList.add("border-bottom","border-2");
}




function sair() {
    window.location = "../../index.html";
}


function loadPage(pageUrl, scriptUrl) {
    const contentDiv = document.getElementById('content');
    
    // Carrega a página via fetch
    fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;

            // Remove qualquer script antigo para evitar duplicações
            const oldScript = document.getElementById('dynamicScript');
            if (oldScript) {
                oldScript.remove();
            }

            // Carrega o JavaScript específico da página
            const script = document.createElement('script');
            script.src = `/src/assets/js/${scriptUrl}`;
            script.id = 'dynamicScript'; // Atribui um id para facilitar a remoção futura
            script.defer = true;
            document.body.appendChild(script);
        })
        .catch(error => {
            console.error("Erro ao carregar a página: ", error);
        });
}

