document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');
    const btnTop = document.querySelector('#btnScrollTop');
    const sectionBienvenidos = document.querySelector('#bienvenidos');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', () => {
        const sectionTop = sectionBienvenidos.offsetTop;

        if (window.scrollY >= sectionTop - 100) {
            nav.classList.remove('d-none');
            nav.classList.add('nav-visible');
        } else {
            nav.classList.add('d-none');
            nav.classList.remove('nav-visible');
        }

        if (window.scrollY > sectionTop) {
            btnTop.classList.remove('d-none');
            btnTop.classList.add('fade-in-btn');
        } else {
            btnTop.classList.add('d-none');
            btnTop.classList.remove('fade-in-btn');
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});