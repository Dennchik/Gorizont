//* --------------------------------[jScript]-----------------------------------
export default function loaded(item) {
	window.onload = function () {
		document.documentElement.classList.add('loaded');
		setInterval(() => {

			document.querySelector(item).classList.add('preloader-remove');
		}, 500);
	};
}