document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const slidesWrapper = carousel.querySelector(".slides");
    const slides = carousel.querySelectorAll(".slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dotsContainer = carousel.querySelector(".dots");
    const counter = carousel.querySelector(".page-counter");

    let index = 0;
    let autoSlide;

    // criar dots
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.addEventListener("click", () => { showSlide(i); resetAutoSlide(); });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateCounter() {
      counter.textContent = `${index + 1}/${slides.length}`;
    }

    function showSlide(n) {
      index = (n + slides.length) % slides.length;
      slidesWrapper.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      updateCounter();
    }

    function startAutoSlide() {
      autoSlide = setInterval(() => showSlide(index + 1), 5000);
    }
    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    nextBtn.addEventListener("click", () => { showSlide(index + 1); resetAutoSlide(); });
    prevBtn.addEventListener("click", () => { showSlide(index - 1); resetAutoSlide(); });

    // inicialização
    showSlide(0);
    startAutoSlide();
  });
});

// Encolher cabeçalho ao rolar
window.addEventListener("scroll", function() {
  const topBar = document.querySelector(".top-bar");
  if (window.scrollY > 10) {
    topBar.classList.add("shrink");
  } else {
    topBar.classList.remove("shrink");
  }
});
