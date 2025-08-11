document.addEventListener('DOMContentLoaded', () => {
  const inputAbertura = document.getElementById('i-abertura');
  const displayAbertura = document.getElementById('abertura');

  function formatDateBR(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  inputAbertura.addEventListener('input', () => {
    const formatted = formatDateBR(inputAbertura.value);
    displayAbertura.textContent = formatted;
  });
});