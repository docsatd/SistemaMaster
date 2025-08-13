document.addEventListener('DOMContentLoaded', () => {
    const selectStatus = document.getElementById('select-status');
    const iStatus = document.getElementById('i-status');
    const status = document.getElementById('status');

    // Inicializa: garante que iStatus está escondido e limpa status
    iStatus.style.display = 'none';
    status.textContent = '';

    selectStatus.addEventListener('change', () => {
        if (selectStatus.value === 'Outro') {
            iStatus.style.display = 'block';
            iStatus.value = '';
            iStatus.focus();
            status.textContent = '[OUTRO]';
        } else {
            iStatus.style.display = 'none';
            status.textContent = selectStatus.value || '';
        }
    });

    iStatus.addEventListener('input', () => {
        if (iStatus.value.trim() !== '') {
            status.textContent = iStatus.value;
        } else {
            status.textContent = '[OUTRO]';
        }
    });
});
