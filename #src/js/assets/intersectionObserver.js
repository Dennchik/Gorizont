/*
Intersection Observer: anim-block
- Animates element from rotateX(60deg) to rotateX(0deg) when it enters viewport from the bottom.
- When the element leaves viewport downward (scrolling down), the class is removed so the element "rotates back".
- Repeats every time the element re-enters from the bottom.

Usage:
- Add CSS (see the CSS comment below) to your stylesheet.
- Add class "anim-block" to the elements you want to animate.
*/

/* CSS (add to your stylesheet):
.anim-block {
  transform: perspective(800px) rotateX(60deg);
  opacity: 0;
  transition: transform 600ms cubic-bezier(.2,.9,.2,1), opacity 600ms;
  transform-origin: center bottom;
  will-change: transform, opacity;
}
.anim-block.visible {
  transform: perspective(800px) rotateX(0deg);
  opacity: 1;
}
*/

document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.anim-block');
  if (!blocks.length) return;

  // Храним предыдущие top значения элементов
  const lastTops = new WeakMap();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        const root = entry.rootBounds || { top: 0, bottom: window.innerHeight };

        const currTop = rect.top;
        const prevTop = lastTops.get(entry.target) ?? currTop;
        lastTops.set(entry.target, currTop);

        const movedUp = currTop < prevTop; // элемент движется вверх относительно вьюпорта
        const movedDown = currTop > prevTop; // элемент движется вниз

        if (entry.isIntersecting) {
          // Если вошёл в экран снизу (двигается вверх)
          if (movedUp) {
            entry.target.classList.add('visible');
          }
        } else {
          // Если элемент вышел вниз за пределы экрана
          if (movedDown && currTop >= (root.bottom || window.innerHeight)) {
            entry.target.classList.remove('visible');
          }
        }
      });
    },
    {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    }
  );

  blocks.forEach((block) => observer.observe(block));
});
