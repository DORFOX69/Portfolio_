document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
      alert('Et bah non tu croi je suis un bon élève');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.animated-shapes');
  const shapeTypes = ['circle', 'triangle'];
  
  for (let i = 0; i < 10; i++) {
    const shape = document.createElement('div');
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const isSmall = Math.random() > 0.5;
    const isFlipped = type === 'triangle' && Math.random() > 0.5;

    shape.classList.add(type);
    if (type === 'circle' && isSmall) shape.classList.add('small');
    if (type === 'triangle' && isFlipped) shape.classList.add('flipped');

    // Position aléatoire
    shape.style.top = Math.floor(Math.random() * 90) + '%';
    shape.style.left = Math.floor(Math.random() * 90) + '%';
    shape.style.animationDuration = (15 + Math.random() * 20) + 's';

    container.appendChild(shape);
  }});