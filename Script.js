// Define a data atual dinamicamente no footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Muda a aparência da topbar ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('hud-nav');
    if (window.scrollY > 40) {
        header.style.borderBottomColor = 'rgba(0, 240, 255, 0.5)';
        header.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.2)';
    } else {
        header.style.borderBottomColor = 'rgba(0, 240, 255, 0.2)';
        header.style.boxShadow = 'none';
    }
});
