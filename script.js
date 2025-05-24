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
