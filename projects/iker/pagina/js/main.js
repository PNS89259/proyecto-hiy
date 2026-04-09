// Menú Responsive
const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#navLinks');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Mostrar contenido al hacer scroll
const scrollReveal = () => {
    const elements = document.querySelectorAll('.card');
    elements.forEach((el) => {
        const elementPos = el.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if(elementPos < screenPos) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    window.addEventListener('scroll', scrollReveal);
});