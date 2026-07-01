const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('ux-theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  if (toggleButton) {
    toggleButton.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');
    toggleButton.textContent = savedTheme === 'dark' ? 'Desativar alto contraste' : 'Ativar alto contraste';
  }
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ux-theme', nextTheme);
    toggleButton.setAttribute('aria-pressed', String(!isDark));
    toggleButton.textContent = nextTheme === 'dark' ? 'Desativar alto contraste' : 'Ativar alto contraste';
  });
}
