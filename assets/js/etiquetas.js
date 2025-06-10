document.addEventListener('DOMContentLoaded', function() {
  // Inicializar AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Actualizar el año actual en el footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Manejar el scroll suave para los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Manejar el botón de scroll to top
  const scrollTopButton = document.getElementById('scroll-top');
  if (scrollTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        scrollTopButton.classList.add('active');
      } else {
        scrollTopButton.classList.remove('active');
      }
    });

    scrollTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Manejar el asistente flotante
  const assistantBtn = document.getElementById('assistantBtn');
  const assistantMenu = document.getElementById('assistantMenu');
  
  if (assistantBtn && assistantMenu) {
    assistantBtn.addEventListener('click', () => {
      assistantMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!assistantBtn.contains(e.target) && !assistantMenu.contains(e.target)) {
        assistantMenu.classList.remove('active');
      }
    });
  }

  // Activar pestaña específica en el modal
  window.activateTab = function(tabId) {
    const tab = document.querySelector(`[data-bs-target="#${tabId}"]`);
    if (tab) {
      const tabInstance = new bootstrap.Tab(tab);
      tabInstance.show();
    }
  };

  // Manejar el formulario de cotización
  const formCotizacion = document.getElementById('formCotizacion');
  if (formCotizacion) {
    formCotizacion.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aquí iría la lógica para enviar el formulario
      alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
      formCotizacion.reset();
    });
  }

  // Manejar el formulario de asesoramiento
  const formAsesoria = document.getElementById('formAsesoria');
  if (formAsesoria) {
    formAsesoria.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aquí iría la lógica para enviar el formulario
      alert('Gracias por tu consulta. Un asesor técnico te contactará pronto.');
      formAsesoria.reset();
    });
  }

  // Animación de títulos rotativos en el CTA
  const rotatingTitles = document.querySelector('.rotating-titles');
  if (rotatingTitles) {
    const titles = rotatingTitles.querySelectorAll('h2');
    let currentIndex = 0;

    setInterval(() => {
      titles[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % titles.length;
      titles[currentIndex].classList.add('active');
    }, 3000);
  }
}); 