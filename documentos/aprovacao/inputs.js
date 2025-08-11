document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-cnpj', targetId: 'cnpj', originalText: '[CNPJ]' },
        { inputId: 'i-razao', targetId: 'razao', originalText: '[RAZÃO SOCIAL]' },

		{ inputId: 'i-gerente', targetId: 'gerente', originalText: '[GERENTE]' },
        { inputId: 'i-pendencia', targetId: 'pendencia', originalText: '[PENDÊNCIA]' },
        
        { inputId: 'i-parcelas', targetId: 'parcelas', originalText: '[PARCELAS]' },
        { inputId: 'i-prazo', targetId: 'prazo', originalText: '[PRAZO DE PAGAMENTO]' },
    ];

    configurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        const targetElement = document.getElementById(config.targetId);

        // Initialize the target element with the original text
        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            if (inputElement.value.trim() === '') {
                targetElement.textContent = config.originalText;
            } else {
                targetElement.textContent = inputElement.value;
            }
        });
    });
});
