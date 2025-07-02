//* --------------------------------[jScript]-----------------------------------
export default function loaded(item) {
	document.documentElement.classList.add('loaded');
	window.onload = function () {

		setInterval(() => {
			document.querySelector(item).classList.add('preloader-remove');
			const preloader = document.querySelector('.preloader');
			if (preloader) {
				preloader.classList.contains('.preloader-remove');
				setInterval(() => {
					preloader.style.opacity = '-2';
				}, 500);
			}
		}, 1000);
	};
}