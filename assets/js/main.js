
// Mobile menu toggle + active link + dynamic year
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'flex';
  });
}

// Set active link based on URL
const links = document.querySelectorAll('.menu a');
links.forEach(a => {
  if (a.getAttribute('href') === location.pathname) {
    a.setAttribute('aria-current','page');
  }
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
