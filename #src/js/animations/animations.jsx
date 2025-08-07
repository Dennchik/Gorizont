import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//* ____________________ [Регистрация - (GSAP) plugins] ________________________
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

//* ____________________ [Конфигурация - ScrollTrigger] ________________________

//* __________________________ [ScrollSmoother] ________________________________
//? speed	Скорость реагирования скролла	0.5(медленно) → 2(быстро)
//? smooth	Плавность / инерция скролла	0.5 → 2
//? effects	Включает поддержку.effects()	true / false
//? smoothTouch	Плавность скролла на тач - устройствах	0 → 1;

export function smoother() {
  ScrollSmoother.create({
    wrapper: '#wrapper',
    content: '#content',
    speed: 1,
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });
}
//* _________________________ [ Card Animetion ] _______________________________
export function tlCardVertical() {
  const parentElements = document.querySelectorAll('.card-gs');
  const smootherInstance = ScrollSmoother.get();

  if (window.innerWidth > 490) {
    smootherInstance.effects('.lag-1', { lag: 0.2, speed: 1 });
    smootherInstance.effects('.lag-2', { lag: 0.5, speed: 1.2 });
  }

  if (!parentElements.length) return;
  parentElements.forEach((parentElement) => {
    const cards = parentElement.querySelectorAll('.el-item');
    cards.forEach((trigger, index) => {
      if (!trigger) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom',
          end: 'bottom bottom',
          endTrigger: trigger,
          scrub: 3,
          toggleActions: 'play none none reverse',
          // markers: true,
        },
      });
      tl.fromTo(
        trigger,
        {
          y: 100, // начальное смещение вниз
          opacity: 0.1,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 3,
          delay: index * 0.5, // задержка для поочередной анимации
        }
      );
    });
  });
}
//* ________________________ [ Title Animetion ] _______________________________

export function tlTitleHorizontal() {
  const triggers = document.querySelectorAll('.trigger-gs');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    const el = trigger.querySelector('.el-1');
    if (!el) return;

    const parent = el.parentElement;
    const maxOffset = parent.clientWidth - el.offsetLeft - el.offsetWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top+=150 bottom',
        end: 'bottom-=150 bottom',
        endTrigger: trigger,
        scrub: 3,
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });
    tl.fromTo(
      el,
      {
        x: maxOffset, // сдвигаем элемент к правой границе внутри родителя
      },
      {
        x: 0, // возвращаем в исходное положение
        ease: 'sine.inOut',
      }
    );
  });
}

//* ___________________________ [applyParallax] ________________________________
/**
 * @param {HTMLElement} element — элемент или его контейнер для Parallax
 */

export function applyParallax(element) {
  const smootherInstance = ScrollSmoother.get();
  smootherInstance.effects(element, {
    speed: () => 0.5,
  });
}
