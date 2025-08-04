// todo - [ Assets ] -
//* - [Slide] -
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide } from './assets/slide.js';
mainSlide('.main-slide');
import { slidePartners } from './assets/slide.js';
slidePartners('.slide-partners');
import { falidateForm } from './assets/validate-form.js';
falidateForm();

//* - [ Animations ] -
import { animationHeader } from './utils/animation-header.jsx';

import {} from // timeLineTextItem,
'./animations/anime-js.jsx';

//* - [ResizeObserver shape-outside ] -
import { syncHeight } from './utils/syncHeight.jsx';

syncHeight({
  sourceSelector: '.perform__text',
  targetSelector: '.perform__shape-block',
  offset: 25, // немного больше, чтобы не врезалась последняя строка
  autoResize: true,
});
import { cookiesAccept } from './layouts/layouts.js';
document.addEventListener('DOMContentLoaded', () => {
  animationHeader();
  cookiesAccept('.cookies-accept', '.cookies-accept__button');
});
// todo ----------------------- [Modules] --------------------------------------
import { modalPage } from './layouts/layouts.js';

modalPage();

// const isMobile = /Mobi|Android/i.test(navigator.userAgent);
document.addEventListener('DOMContentLoaded', function () {
  //* --------------------------- Animation title -----------------------------
  // const el2 = document.querySelector('.el-2');
  // if (!isMobile) {
  // 	timeLineTextItem();
  // } else {
  // 	el2.style.transform = 'scaleY(1.5)';
  // }
});

//* ------------------------------ Burger Menu ---------------------------------
const burgerButton = document.querySelector('.burger-button');
const networkLinks = document.querySelector('.network-menu__links');
const headerButton = document.querySelector('.header__button');

burgerButton.addEventListener('click', () => {
  networkLinks.classList.toggle('_rotate');
  headerButton.classList.toggle('_active');
  burgerButton.classList.toggle('_open-menu');
});
//* ----------------------------- Burger Button --------------------------------
// anchorLinks.forEach(anchorLink => {
// 	anchorLink.addEventListener('click', () => {
// 		if (!accelerate.classList.contains('hide')) {
// 			accelerate.classList.add('hide');
// 			document.body.classList.remove('no-scroll');
// 		}
// 		burgerButton.classList.remove('_open-menu');
// 	});
// });
// todo - Plugins -
//* - [ Select ] -
import { select } from './plugins/itsSelect.js';
select();

//* ----------------------------------------------------------------------------
console.log(
  '%c РОССИЯ ',
  'background: blue; color: yellow; font-size: x-large; ' +
    'border-left: 5px solid black; border-top: 30px solid white; ' +
    'border-right: 2px solid black; border-bottom: 30px solid red;'
);
//* ----------------------------------------------------------------------------
