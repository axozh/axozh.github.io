const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

// Counter animation function
function animateCounter(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to start the counter animation when the page loads
function startCounterAnimation() {
  const counterElement = document.getElementById('counterValue');
  const targetValue = 100; // Change this to your desired target value
  const animationDuration = 2000; // Change this to your desired animation duration in milliseconds
  animateCounter(counterElement, 0, targetValue, animationDuration);
}

// Trigger the counter animation when the page finishes loading
window.addEventListener('load', startCounterAnimation);
