const animarNumeros = () => {
    const contadores = document.querySelectorAll('.counter');
    
    contadores.forEach(contador => {
        const targetStr = contador.getAttribute('data-target').replace(',', '.');
        const objetivo = parseFloat(targetStr);
        
        // DETECCIÓN AUTOMÁTICA DE DECIMALES
        // Si el número tiene punto, cuenta cuántos números hay después
        const tieneDecimales = targetStr.includes('.');
        const numDecimales = tieneDecimales ? targetStr.split('.')[1].length : 0;

        let tiempoInicio = null;
        const duracion = 2000; 

        const paso = (tiempoActual) => {
            if (!tiempoInicio) tiempoInicio = tiempoActual;
            const progreso = Math.min((tiempoActual - tiempoInicio) / duracion, 1);
            
            const valorActual = progreso * objetivo;
            
            // Forzamos la visualización de los decimales detectados
            contador.innerText = valorActual.toFixed(numDecimales).replace('.', ',');

            if (progreso < 1) {
                requestAnimationFrame(paso);
            } else {
                contador.innerText = objetivo.toFixed(numDecimales).replace('.', ',');
            }
        };

        requestAnimationFrame(paso);
    });
};

// Observador para activar con scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarNumeros();
            observer.disconnect();
        }
    });
}, { threshold: 0.2 });

const seccionStats = document.querySelector('.stats');
if (seccionStats) {
    observer.observe(seccionStats);
}

