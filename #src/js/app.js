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