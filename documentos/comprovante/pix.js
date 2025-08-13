document.addEventListener('DOMContentLoaded', () => {
  const selectPix = document.getElementById('select-pix');
  const iPix = document.getElementById('i-pix');
  const pix = document.getElementById('pix');

  // Inicializa: input escondido e texto limpo ou padrão
  iPix.style.display = 'none';
  pix.textContent = '';

  selectPix.addEventListener('change', () => {
    if (selectPix.value === 'Sim') {
      iPix.style.display = 'block';
      iPix.value = '';
      iPix.focus();
      pix.textContent = '[CHAVE PIX]';
    } else {
      iPix.style.display = 'none';
      pix.textContent = selectPix.value || '';
    }
  });

  iPix.addEventListener('input', () => {
    if (iPix.style.display !== 'none' && iPix.value.trim() !== '') {
      pix.textContent = iPix.value;
    } else {
      pix.textContent = '[CHAVE PIX]';
    }
  });
});
