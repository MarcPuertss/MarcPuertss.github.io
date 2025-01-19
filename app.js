document.addEventListener('DOMContentLoaded', function () {
    const topNav = document.querySelector('.header');
    const sideNav = document.querySelector('.side-nav');
    const sections = document.querySelectorAll('section');

    // Función para cambiar las barras de navegación según la sección activa
    function checkActiveSection() {
        let currentSection = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Verifica si la sección está visible en la ventana
            if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
                currentSection = section.id;
            }
        });

        // Mostrar u ocultar las barras según la sección visible
        if (currentSection === 'home') {
            topNav.classList.add('active'); // Barra superior visible
            sideNav.classList.remove('active'); // Barra lateral oculta
        } else {
            topNav.classList.remove('active'); // Barra superior oculta
            sideNav.classList.add('active'); // Barra lateral visible
        }
    }

    // Llamar la función para comprobar la sección activa en el inicio
    checkActiveSection();

    // Agregar evento de scroll para comprobar la sección activa al hacer scroll
    window.addEventListener('scroll', checkActiveSection);
});
