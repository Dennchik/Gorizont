// import { smoother, applyParallax } from './animations/animations.jsx';

//* ----------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', () => {
// 	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// 	// 	const bgSection = document.querySelector('.bg-section');
// 	// 	const parallax = document.querySelector('.parallax');

// 	if (!isMobile) {
// 		smoother();
// 		applyParallax('.bg-image');
// 	}
// });
// todo --------------------------- Modules ------------------------------------
//* - [ Прелоадер ] -
import loaded from './assets/preloader.js';
loaded('.preloader');

// todo --------------------------- Plugins ------------------------------------
//* - [Phone-Mask] -
import { maskPhone } from './plugins/phone-mask.js';
document.addEventListener('DOMContentLoaded', () => {
	maskPhone('.phone');
});

//* - [ Плавная прокрутка страницы до позиции ] -
import { anchorsSmoothScrolling } from './plugins/anchors-smooth-scrolling.js';
anchorsSmoothScrolling();

//* - [ Возврат к предидущей позиции на страници ] -
import returnToSavedPosition from './plugins/return-position.js';
returnToSavedPosition();
//* - [ Select ] -
import { select } from './plugins/itsSelect.js';
select();