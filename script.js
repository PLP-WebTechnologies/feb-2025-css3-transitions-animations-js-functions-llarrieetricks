// Store and apply user preference for dark mode
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

function applyDarkModePreference() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  body.classList.toggle('dark-mode', isDark);
  toggle.checked = isDark;
}

toggle.addEventListener('change', () => {
  localStorage.setItem('darkMode', toggle.checked);
  applyDarkModePreference();
});

applyDarkModePreference();

// Trigger animation on button click
const btn = document.getElementById('animateBtn');
const img = document.getElementById('animatedImage');

btn.addEventListener('click', () => {
  img.classList.add('animate');
  setTimeout(() => img.classList.remove('animate'), 1000); // reset after 1s
});
