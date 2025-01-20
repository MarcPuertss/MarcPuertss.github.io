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

// Función para mover el carrusel
function moveSlide(step, carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');
    let currentIndex = -1;

    for (let i = 0; i < items.length; i++) {
        if (items[i].style.display === 'block') {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex === -1) {
        items[0].style.display = 'block';
        return;
    }

    items[currentIndex].style.display = 'none';

    const nextIndex = (currentIndex + step + items.length) % items.length;

    items[nextIndex].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const items = carousel.getElementsByClassName('carousel-item');
        if (items.length > 0) {
            items[0].style.display = 'block';
        }
    });
});

