document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interação: alerta ao clicar em um link do menu
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Apenas exemplo, pode remover ou alterar
            // event.preventDefault(); // Descomente para evitar navegação
            // alert('Você clicou em: ' + link.textContent);
        });
    });
});
