gsap.registerPlugin(ScrollTrigger);

// SOBRE
gsap.from(".sobre-content img", {
  scrollTrigger: {
    trigger: ".sobre-content",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  duration: 1
});

gsap.from(".sobre-content div", {
  scrollTrigger: {
    trigger: ".sobre-content",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.3
});

// BLOCO DE TEXTO
gsap.utils.toArray(".bloco-texto").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// CASES
gsap.from(".cases h2", {
  scrollTrigger: {
    trigger: ".cases h2",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from(".cards .card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2
});

// INFO EXTRA
gsap.from(".info-extra", {
  scrollTrigger: {
    trigger: ".info-extra",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// CTA
gsap.from(".cta", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Menu Mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
