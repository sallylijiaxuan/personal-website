'use strict';
for (const button of document.querySelectorAll('.case-toggle')) {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    button.innerHTML = expanded ? 'Explore the thinking <span>↗</span>' : 'Close the story <span>−</span>';
  });
}
const focusButton = document.getElementById('focus-toggle');
focusButton.addEventListener('click', () => {
  const active = focusButton.getAttribute('aria-pressed') !== 'true';
  focusButton.setAttribute('aria-pressed', String(active));
  document.querySelector('.focus-window').classList.toggle('is-focusing', active);
  document.getElementById('focus-status').textContent = active ? 'One thing at a time. Your friend is here.' : 'Room to breathe. Ready when you are.';
  focusButton.textContent = active ? 'Pause for a breath Ⅱ' : 'Take a focus moment ↗';
});
document.getElementById('year').textContent = new Date().getFullYear();
