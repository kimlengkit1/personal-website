// add a button to toggle dark mode

function applyTheme(theme) {
    const html = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (theme === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      } else {
        html.classList.add('light');
        html.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    localStorage.setItem('theme', savedTheme);
    applyTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    if (!toggleButton) {
        return;
    }
    toggleButton.addEventListener('click', () => {
        try {
            toggleTheme();
            console.log('Theme toggled');
        } catch (error) {
            console.error('Failed to toggle theme', error);
        }
    });
});

initializeTheme();