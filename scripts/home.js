document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    { title: 'Facility Maintenance & Cleaning', text: 'Clean, compliant, and reliable facilities.', image: '../images/facility.webp' },
    { title: 'Grounds Keeping', text: 'Safe, attractive outdoor spaces.', image: '../images/garden.webp' },
    { title: 'PA & Audio Visual', text: 'Clear communication and event-ready systems.', image: '../images/AV.webp' },
    { title: 'Remote Monitoring', text: 'Proactive oversight and smart alerts.', image: '../images/security.webp' }
  ];

  let current = 0;
  const hero = document.querySelector('.hero');
  const title = document.getElementById('hero-title');
  const text = document.getElementById('hero-text');

  function update() {
    hero.style.backgroundImage = `url(${slides[current].image})`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    title.textContent = slides[current].title;
    text.textContent = slides[current].text;
  }

  document.querySelector('.hero-arrow.right').onclick = () => { current = (current + 1) % slides.length; update(); };
  document.querySelector('.hero-arrow.left').onclick = () => { current = (current - 1 + slides.length) % slides.length; update(); };

  setInterval(() => { current = (current + 1) % slides.length; update(); }, 7000);

  update();
});