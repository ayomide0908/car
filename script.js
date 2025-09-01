// Select testimonial + feature cards
const animatedCards = document.querySelectorAll(".testimonial-card, .feature-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element enters viewport → add animation class
      entry.target.classList.add("show");
    } else {
      // Element leaves viewport → remove class
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 });

// Observe each card
animatedCards.forEach(card => {
  observer.observe(card);
});
