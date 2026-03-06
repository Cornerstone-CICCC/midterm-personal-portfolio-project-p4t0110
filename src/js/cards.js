const cards = document.querySelectorAll(".card");

const getCenter = () => (cards.length - 1) / 2;

// ===============================
// 1) Posición inicial centrada
// ===============================
cards.forEach((card, i) => {
  const center = getCenter();
  const offset = (i - center) * 160;

  card.style.setProperty("--offset-x", `${offset}px`);
});

// ===============================
// 2) Separación horizontal solo al llegar a la sección
// ===============================
window.addEventListener("scroll", () => {
  const section = document.querySelector(".cards-showcase");
  const rect = section.getBoundingClientRect();

  const trigger = window.innerHeight * 0.6;

  if (rect.top < trigger) {
    const progress = (trigger - rect.top) / trigger;
    const center = getCenter();

    cards.forEach((card, i) => {
      const spread = 150 * progress;
      const offset = (i - center) * spread;

      card.style.setProperty("--offset-x", `${offset}px`);
    });
  }
});