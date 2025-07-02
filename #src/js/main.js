// todo --------------------------- Modules ------------------------------------
//* ------------------------------ Прелоадер -----------------------------------
import loaded from './assets/preloader.js';
loaded('.preloader');
// todo --------------------------- Assets -------------------------------------
//* ----------------------------- [Slide] --------------------------------------
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide } from './layouts/slide.js';
mainSlide('.main-slide');
import { slidePartners } from './layouts/slide.js';
slidePartners('.slide-partners');
// todo --------------------------- Plugins ------------------------------------
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './plugins/anchors-smooth-scrolling.js';
anchorsSmoothScrolling();
//* -------------- Возврат к предидущей позиции на страници --------------------
import returnToSavedPosition from './modules/return-position.js';
returnToSavedPosition();
//* ----------------------------------------------------------------------------
import {
	// timeLineTextItem,
} from './animations/anime-js.jsx';

//* ------------------- [ResizeObserver shape-outside ] ------------------------
import { syncHeight } from './utils/syncHeight.jsx';

syncHeight({
	sourceSelector: '.perform__text',
	targetSelector: '.perform__shape-block',
	offset: 20, // немного больше, чтобы не врезалась последняя строка
	autoResize: true,
});
// todo ---------------------- [Animations] ------------------------------------
import { animationHeader } from './utils/animation-header.jsx';
document.addEventListener('DOMContentLoaded', () => {
	animationHeader();
});

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
const accelerate = document.querySelector('.accelerate');
const networkLinks = document.querySelector('.network-menu__links');
const headerButton = document.querySelector('.header__button');

// const itemButton = document.querySelector('.item-button');
// const closeButton = document.querySelector('.project-list__close-button');
// const projectList = document.querySelector('.project-list');
const anchorLinks = document.querySelectorAll('.anchor-link');

burgerButton.addEventListener('click', () => {
	networkLinks.classList.toggle('_rotate');
	headerButton.classList.toggle('_active');
	// accelerate.classList.toggle('hide');
	burgerButton.classList.toggle('_open-menu');

	// if (burgerButton.classList.contains('_open-menu')) {
	// 	document.body.classList.add('no-scroll');
	// } else {
	// 	document.body.classList.remove('no-scroll');
	// }
});
//* ----------------------------- Burger Button --------------------------------
anchorLinks.forEach(anchorLink => {
	anchorLink.addEventListener('click', () => {
		if (!accelerate.classList.contains('hide')) {
			accelerate.classList.add('hide');
			document.body.classList.remove('no-scroll');
		}
		burgerButton.classList.remove('_open-menu');
	});
});


//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
