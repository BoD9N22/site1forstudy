const burgerBtn = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const svgPaths = burgerBtn.querySelector("svg path");

burgerBtn.addEventListener("click", () => {
  const isOpened = burgerBtn.getAttribute("aria-expanded") === "true";

  if (isOpened) {
    burgerBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    svgPaths.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  } else {
    burgerBtn.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    svgPaths.setAttribute("d", "M6 18L18 6M6 6l12 12");
  }
});

document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    burgerBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    svgPaths.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  });
});

document.addEventListener("click", e => {
  if (
    !burgerBtn.contains(e.target) &&
    !mobileNav.contains(e.target) &&
    mobileNav.classList.contains("open")
  ) {
    burgerBtn.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    svgPaths.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll(".slides-item");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const dots = document.querySelectorAll(".btn-circle");

  let currentSlide = 0;
  const totalSlides = slides.length;

  const showSlide = index => {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  };

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentSlide = parseInt(dot.dataset.slide);
      showSlide(currentSlide);
    });
  });

  let autoPlayInterval = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 6000);

  showSlide(currentSlide);
});
