document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade das abas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            tabBtns.forEach(b => b.classList.remove('active'));
            // Adiciona a classe active ao botão clicado
            btn.classList.add('active');

            // Remove a classe active de todos os painéis
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Adiciona a classe active ao painel correspondente
            const tabId = btn.getAttribute('data-tab');
            const targetPane = document.querySelector(`.tab-pane#${tabId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Apenas exemplo, pode remover ou alterar
            // event.preventDefault(); // Descomente para evitar navegação
            // alert('Você clicou em: ' + link.textContent);
        });
    });
});
