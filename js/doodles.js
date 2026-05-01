// doodles.js — scroll-reveal per i doodle SVG (.dd-wrap → .dd-in)

document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => el.classList.add('dd-in'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.dd-wrap').forEach(el => io.observe(el));
});
