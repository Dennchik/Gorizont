const isMobile = /Mobi|Android/i.test(navigator.userAgent);

// todo - [ Assets ] -
//* - [Slide] -
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide } from './assets/slide.js';
mainSlide('.main-slide');
import { slidePartners } from './assets/slide.js';
slidePartners('.slide-partners');
import { validateForm } from './assets/validate-form.js';
validateForm();
import { dynamicAdaptive } from './plugins/dynamic-adaptive.js';
dynamicAdaptive();

//* - [ Плавная прокрутка страницы до позиции ] -
import { anchorManager } from './plugins/anchors-smooth-scrolling.js';
anchorManager();

// todo - [Modules] -
import { modalPage } from './layouts/layouts.js';

const personalPage = document.querySelector('.personal-data');
if (personalPage) {
  modalPage();
}
// todo - [ Plugins ] -
//* - [ Select ] -
import { select } from './plugins/itsSelect.js';
select();

//* - [ ResizeObserver shape-outside ] -
import { syncHeight } from './utils/syncHeight.jsx';

syncHeight({
  sourceSelector: '.perform__text',
  targetSelector: '.perform__shape-block',
  offset: 25, // немного больше, чтобы не врезалась последняя строка
  autoResize: true,
});

import { animationHeader } from './utils/animation-header.jsx';
import { cookiesAccept } from './layouts/layouts.js';
document.addEventListener('DOMContentLoaded', () => {
  animationHeader();
  cookiesAccept('.cookies-accept', '.cookies-accept__button');
});

// todo - [ Animations ] -
import { timeLineTextItem } from './animations/anime-js.jsx';
import {
  tlTitleHorizontal,
  tlCardVertical,
  tlIntersectionObserver,
} from './animations/animations.jsx';

document.addEventListener('DOMContentLoaded', function () {
  if (!isMobile) {
    setTimeout(() => {
      timeLineTextItem();
    }, 1000);
    tlIntersectionObserver('.anim-block', '.products__row');
    tlCardVertical();
    //* - [ Animation title ] -
    tlTitleHorizontal();
  }
});

//* - [ Burger Menu ] -
const burgerButton = document.querySelector('.burger-button');
const networkLinks = document.querySelector('.network-menu__links');
const headerButton = document.querySelector('.header__button');

burgerButton.addEventListener('click', () => {
  networkLinks.classList.toggle('_rotate');
  headerButton.classList.toggle('_active');
  burgerButton.classList.toggle('_open-menu');
});
//* - [ Burger Button ] -

//* ----------------------------------------------------------------------------
