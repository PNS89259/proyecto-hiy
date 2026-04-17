document.addEventListener('DOMContentLoaded', () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnTop = document.querySelector('#btnScrollTop');
    const sectionBienvenidos = document.querySelector('#bienvenidos');

    window.addEventListener('scroll', () => {
        // Obtenemos la posición de la sección bienvenidos
        const sectionTop = sectionBienvenidos.offsetTop;

        if (window.scrollY > sectionTop) {
            btnTop.classList.remove('d-none');
            btnTop.classList.add('fade-in-btn');
        } else {
            btnTop.classList.add('d-none');
            btnTop.classList.remove('fade-in-btn');
        }
    });

    // Acción de volver arriba
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});