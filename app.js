document.addEventListener('DOMContentLoaded', function () {
    const topNav = document.querySelector('.header');
    const sideNav = document.querySelector('.side-nav');
    const sections = document.querySelectorAll('section');
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    // Función para comprobar si es una pantalla pequeña
    function isSmallScreen() {
        return window.innerWidth <= 768; // Umbral para pantallas pequeñas
    }

    // Función para gestionar las barras de navegación según la sección activa
    function checkActiveSection() {
        let currentSection = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Verifica si la sección está visible en la ventana
            if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
                currentSection = section.id;
            }
        });

        if (isSmallScreen()) {
            // En pantallas pequeñas, solo mostramos la barra superior
            topNav.classList.add('active'); // Barra superior visible
            sideNav.classList.remove('active'); // Ocultar barra lateral
        } else {
            // En pantallas grandes, se alternan ambas barras según la sección
            if (currentSection === 'home') {
                topNav.classList.add('active'); // Barra superior visible
                sideNav.classList.remove('active'); // Barra lateral oculta
            } else {
                topNav.classList.remove('active'); // Barra superior oculta
                sideNav.classList.add('active'); // Barra lateral visible
            }
        }
    }

    // Llamar la función para comprobar la sección activa al inicio
    checkActiveSection();

    // Agregar evento de scroll para comprobar la sección activa al hacer scroll
    window.addEventListener('scroll', checkActiveSection);


    // Agregar evento de cambio de tamaño de ventana para comprobar el tamaño de pantalla
    window.addEventListener('resize', checkActiveSection);

    // Función para alternar el menú lateral en pantallas pequeñas
    menuBtn.addEventListener("click", () => {
        if (isSmallScreen()) {
            // Alternar la visibilidad de la barra lateral
            sideNav.classList.toggle("active"); // Alterna la visibilidad de la barra lateral
            topNav.classList.toggle("active"); // Alterna la visibilidad de la barra superior
        }
    });
     // Detectar clic fuera de la barra lateral para cerrarla
     document.addEventListener('click', (event) => {
        const isClickInsideSideNav = sideNav.contains(event.target);
        const isClickInsideMenuBtn = menuBtn.contains(event.target);
        
        if (!isClickInsideSideNav && !isClickInsideMenuBtn && isSmallScreen()) {
            // Si el clic es fuera de la barra lateral y el botón de menú, cerramos la barra lateral
            sideNav.classList.remove("active");
            topNav.classList.remove("active");
        }
    });
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

function copyToClipboard() {
    const emailInput = document.getElementById("email");
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // Para móviles
    navigator.clipboard.writeText(emailInput.value).then(() => {
        alert("Email copied to clipboard!");
    });
}
