// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Fecha o menu quando clicar em um link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ========================================
// ANIMAÇÃO DE ENTRADA
// ========================================

const animatedElements = document.querySelectorAll(
  ".hero-copy, .hero-visual, .section-heading, .service-card, .project-copy, .project-panel, .process-step, .cta-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

animatedElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});


// ========================================
// ANO AUTOMÁTICO DO FOOTER
// ========================================

const footerYear = document.querySelector(".footer-inner span");

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} Nível 3 Lite`;
}
