document.addEventListener('DOMContentLoaded', () => {
    // 1. Cerrar el menú desplegable al hacer clic en un enlace (Mejora para móviles)
    const enlacesNav = document.querySelectorAll('.navbar-nav .nav-link');
    const menuColapsable = document.querySelector('.navbar-collapse');
    const btsCollapse = new bootstrap.Collapse(menuColapsable, { toggle: false });

    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', () => {
            // Solo cerramos si el menú está desplegado (en móviles)
            if (menuColapsable.classList.contains('show')) {
                btsCollapse.hide();
            }
        });
    });

    console.log("Pozo Sotón v1.0: Módulo de navegación cargado correctamente.");
});