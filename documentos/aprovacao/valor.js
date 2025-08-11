document.addEventListener('DOMContentLoaded', () => {
    function formatToBRL(value) {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function atualizarValorFormatado() {
        const inputValor = document.getElementById('i-valor');
        const displayValor = document.getElementById('valor');

        const numericValue = parseFloat(inputValor.value) || 0;
        displayValor.innerText = formatToBRL(numericValue);
    }

    document.getElementById('i-valor').addEventListener('input', atualizarValorFormatado);

    // Inicializa a exibição ao carregar a página
    atualizarValorFormatado();
});
