document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        let navLinks = document.querySelectorAll('.navbar .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });
    }

    // Menüdeki linklere tıklanınca aktif class'ı güncelle
document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.navbar .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

    // Dil değiştirme
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'tr';
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            langBtn.textContent = currentLang.toUpperCase();

            document.querySelectorAll('[data-en]').forEach(el => {
                el.innerHTML = el.getAttribute(`data-${currentLang}`);
            });
            document.querySelectorAll('[data-en-placeholder]').forEach(el => {
                el.placeholder = el.getAttribute(`data-${currentLang}-placeholder`);
            });
            // Butonlar için value değişimi
            document.querySelectorAll('input[type=\"submit\"][data-en]').forEach(el => {
                el.value = el.getAttribute(`data-${currentLang}`);
            });
        });
    }
});