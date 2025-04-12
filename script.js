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

