document.addEventListener('DOMContentLoaded', function () {
    const elementosTexto = [
        { class: 'banco-cnpj', texto: '33.923.798/0002-83' },

        { class: 'banco-nome', texto: 'Banco Master' },
        { class: 'banco-nome-ALT', texto: 'Banco Master' },

        { class: 'banco-nomeCAPS', texto: 'BANCO MASTER' },
        { class: 'banco-nomeCAPS-ALT', texto: 'BANCO MASTER' },

        { class: 'banco-razaosocial', texto: 'Banco Master S/A' },
        { class: 'banco-razaosocialCAPS', texto: 'BANCO MASTER S/A' },
        
        { class: 'banco-comprovante', texto: 'BANCO MASTER SA' },
        { class: 'banco-agencia', texto: '0001' },
        { class: 'banco-conta', texto: '41192137-4' },

        { class: 'banco-logradouro', texto: 'Rua Elvira Ferraz' },
        { class: 'banco-numero', texto: '440' },
        { class: 'banco-bairro', texto: 'Vila Olimpia' },
        { class: 'banco-cidade', texto: 'São Paulo' },
        { class: 'banco-estado', texto: 'São Paulo' },
        { class: 'banco-uf', texto: 'SP' },
        { class: 'banco-cep', texto: '04552-040' },

        { class: 'banco-diretor', texto: 'Andre Kruschewsky' },
    ];

    elementosTexto.forEach(item => {
        const elementos = document.querySelectorAll(`.${item.class}`);
        elementos.forEach(el => {
            el.dataset.originalText = el.textContent;
            el.textContent = item.texto;
        });
    });
});