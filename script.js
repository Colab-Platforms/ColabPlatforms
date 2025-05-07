const lenis = new Lenis();

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const parallaxItems = document.querySelectorAll('[data-speed]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxItems.forEach(item => {
      const speed = parseFloat(item.dataset.speed);
      const offsetTop = item.offsetTop;
      const translateY = (scrollY - offsetTop) * speed;

      item.style.transform = `translateY(${translateY}px)`;
    });
  });

  const heroes = document.querySelectorAll(".hero");

  heroes.forEach((hero) => {
    hero.addEventListener("click", () => {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScIIZ61SQ0fieck_jrkiiDiWoVCRvLj3hPSqWXCpppzTw7FkQ/viewform?usp=dialo", "_blank");
    });
  });
  
