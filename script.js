document.addEventListener("DOMContentLoaded", () => {
  // --- Testimonial + Feature Cards ---
  const animatedCards = document.querySelectorAll(
    ".testimonial-card, .feature-card"
  );

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedCards.forEach((card) => cardObserver.observe(card));

  // --- Hero Buttons ---
  const buttons = document.querySelector(".buttons");

  const buttonObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          buttons.classList.add("show");
          buttonObserver.unobserve(entry.target); // run once
        }
      });
    },
    { threshold: 0.3 }
  );

  buttonObserver.observe(buttons);
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // how far scrolled
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
