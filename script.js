// ============================================
// RADHA CARPENTRY WORKS — SCRIPT
// ============================================

// ---------- Sticky navbar background on scroll ----------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---------- Mobile menu toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ---------- Auto-update footer year ----------
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ---------- Staggered fade-in on scroll (sections + cards) ----------
const animatedItems = document.querySelectorAll(
  '.section, .project-card, .service-card, .why-item, .process-step'
);

animatedItems.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.7s ease ${(index % 6) * 0.08}s, transform 0.7s ease ${(index % 6) * 0.08}s`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.15 });

animatedItems.forEach(el => observer.observe(el));

// ---------- Subtle hero parallax on scroll ----------
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroContent && scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroContent.style.opacity = 1 - scrollY / 600;
  }
});
