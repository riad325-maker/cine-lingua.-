// theme.js
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((theme === 'light' && btn.innerHTML.includes('sun')) ||
            (theme === 'dark' && btn.innerHTML.includes('moon'))) {
            btn.classList.add('active');
        }
    });
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if ((savedTheme === 'light' && btn.innerHTML.includes('sun')) ||
            (savedTheme === 'dark' && btn.innerHTML.includes('moon'))) {
            btn.classList.add('active');
        }
    });
});
