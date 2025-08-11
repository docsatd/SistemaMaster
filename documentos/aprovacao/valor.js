function formatValue(value) {
    // Remove tudo que não for dígito e vírgula, substitui vírgula por ponto para parseFloat
    return value.replace(/[^\d,]/g, '').replace(',', '.');
}

function formatToBRL(value) {
    // Formata número para Real com 2 casas decimais
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatInputValue(e) {
    // Pega valor do input, formata e atualiza o input
    let raw = e.target.value;

    // Remove tudo que não é dígito ou vírgula
    raw = raw.replace(/[^\d,]/g, '');

    // Troca vírgula para ponto para converter
    const numericValue = parseFloat(raw.replace(',', '.')) || 0;

    // Atualiza o input com o valor formatado em BRL, sem o símbolo R$
    e.target.value = formatToBRL(numericValue);
}

document.getElementById('i-valor').addEventListener('input', formatInputValue);

// Se quiser que parcelas só aceite números inteiros:
document.getElementById('i-parcelas').addEventListener('input', function(e) {
    // Remove tudo que não for dígito
    e.target.value = e.target.value.replace(/[^\d]/g, '');
});
