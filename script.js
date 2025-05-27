// Inicializa ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação para seção HOME
gsap.from(".home h1", {
  opacity: 0,
  y: -100,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".home p", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.5
});

// Animação PROJETOS
gsap.from(".projetos .card", {
  scrollTrigger: {
    trigger: ".projetos .card",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

// Animação SOBRE
gsap.from(".sobre .sobre-content img", {
  scrollTrigger: {
    trigger: ".sobre .sobre-content",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".sobre .sobre-content p", {
  scrollTrigger: {
    trigger: ".sobre .sobre-content",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
  delay: 0.3
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Animações de rolagem com GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".texto-quebrado h2", {
    scrollTrigger: ".texto-quebrado h2",
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from(".texto-quebrado p", {
    scrollTrigger: ".texto-quebrado p",
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  });

  gsap.from(".projetos h2", {
    scrollTrigger: ".projetos h2",
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from(".cards .card", {
    scrollTrigger: ".cards",
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  });

  gsap.from(".sobre h2", {
    scrollTrigger: ".sobre h2",
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from(".sobre-content", {
    scrollTrigger: ".sobre-content",
    y: 50,
    opacity: 0,
    duration: 1
  });
});
