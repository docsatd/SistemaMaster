document.addEventListener('DOMContentLoaded', () => {
  function getBasePath() {
    if (location.protocol === 'file:') {
      // Ajuste o nome "SistemaMaster" conforme o nome da sua pasta raiz local
      const match = location.pathname.match(/(.*SistemaMaster\/)/i);
      if (match && match[1]) {
        return match[1];
      } else {
        return '/SistemaMaster/'; // fallback, tenta pelo nome da pasta
      }
    } else {
      // Online: raiz do site é /SistemaMaster/
      return '/SistemaMaster/';
    }
  }

  const basePath = getBasePath();

  // Ajusta os links do navdrawer
  const navLinks = document.querySelectorAll('.sistema-navdrawer a[data-path]');
  navLinks.forEach(link => {
    const relativePath = link.getAttribute('data-path');
    let fullHref = basePath + relativePath;
    if (!fullHref.endsWith('/')) fullHref += '/';
    link.href = fullHref;
  });

  // Ativa a opção correta
  const currentPath = location.pathname;
  navLinks.forEach(link => {
    // Usar location.origin para URL absoluta
    const linkPath = new URL(link.href, location.origin).pathname;
  });

  // Ajusta o src da logo
  const logo = document.getElementById('logo');
  if (logo) {
    let logoPath = basePath + 'sistema/logo.png';
    logo.src = logoPath;
  }
});
