const toggleCheckbox = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  toggleCheckbox.checked = theme === 'dark';
}

function initTheme() {
  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  localStorage.setItem('theme', theme);
}

toggleCheckbox.addEventListener('change', () => {
  const isDark = toggleCheckbox.checked;
  const nextTheme = isDark ? 'dark' : 'light';
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', nextTheme);
});

initTheme();
