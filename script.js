// Run once when the page is fully loaded
window.addEventListener('load', () => {
  // Basic burst in the center
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Optional: a second burst from left and right
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 300);
});

function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  setTimeout(() => {
    confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } });
  }, 300);
}

// Auto-run on page load
window.addEventListener("load", fireConfetti);

// Button click
document.getElementById("confetti-btn").addEventListener("click", fireConfetti);
