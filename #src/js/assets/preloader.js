//* --------------------------------[jScript]-----------------------------------
export default function loaded(item) {
	window.onload = function () {
		document.documentElement.classList.add('loaded');
		setInterval(() => {
			const preloader = document.querySelector('.preloader');
			if (preloader) {
				setInterval(() => {
					preloader.style.zIndex = '-2';
					preloader.style.display = 'none';
				}, 700);
			}
			document.querySelector(item).classList.add('preloader-remove');
		}, 2000);
	};
}