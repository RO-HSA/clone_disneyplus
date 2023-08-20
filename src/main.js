const buttons = document.querySelectorAll('[data-tab-button]');

document.addEventListener('DOMContentLoaded', function() {
        
    for (let i = 0; i < buttons.length; i++) {
        buttons[i]. addEventListener('click', function(button) {
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
});

function removeBotaoAtivo() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    };
};

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    };
};