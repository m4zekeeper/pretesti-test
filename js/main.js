// main.js — form handling e scroll reveal

document.addEventListener('DOMContentLoaded', () => {

  // ── Form: Prenota ──────────────────────────────────────────────────────────
  const formPrenota = document.getElementById('form-prenota');
  if (formPrenota) {
    // Selezione serata — toggle classe .on sul label cliccato
    formPrenota.querySelectorAll('.event-chooser label').forEach(label => {
      label.addEventListener('click', () => {
        formPrenota.querySelectorAll('.event-chooser label').forEach(l => l.classList.remove('on'));
        label.classList.add('on');
      });
    });

    formPrenota.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusSpan = formPrenota.querySelector('.form-status');
      const btn = formPrenota.querySelector('button[type="submit"]');
      if (statusSpan) statusSpan.textContent = 'Inviata ✓';
      if (btn) btn.textContent = 'Ricevuta — ti scriveremo';
    });
  }

  // ── Form: Newsletter ───────────────────────────────────────────────────────
  const formNewsletter = document.getElementById('form-newsletter');
  if (formNewsletter) {
    formNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = formNewsletter.querySelector('button[type="submit"]');
      const input = formNewsletter.querySelector('input[type="email"]');
      if (btn) btn.textContent = 'Iscritto ✓';
      if (input) input.disabled = true;
    });
  }

});
