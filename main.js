// Header scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

// Simple hero auto-slide (optional)
let current = 0;
const slides = document.querySelectorAll('.hero-slide');
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 6000);