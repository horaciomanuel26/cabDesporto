function abrir() {
    var menu = document.getElementById('menu_lateral');
    menu.classList.add('ativo'); // Adiciona a classe para deslizar
}

function fechar() {
    var menu = document.getElementById('menu_lateral');
    menu.classList.remove('ativo'); // Remove a classe para esconder
}
