//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
export function newslide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			effect: 'slide',
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: true,
			// },
			speed: 800,
			// mousewheel: true,
			loop: true,
			grabCursor: true,
			slidesPerView: 3,
			centeredSlides: false,
			// navigation: {
			// 	nextEl: '.news-slide-next',
			// 	prevEl: '.news-slide-prev',
			// },
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				960: {
					slidesPerView: 2,
				},
				1440: {
					slidesPerView: 3, spaceBetween: 30
				}
			},

			// on: {
			// 	init: function () {
			// 		updateSlideCounter(this);
			// 	},
			// 	slideChange: function () {
			// 		updateSlideCounter(this);
			// 	}
			// }
		});
	}

	function updateSlideCounter(swiperInstance) {
		// const realIndex = swiperInstance.realIndex + 1;
		// const totalSlides = swiperInstance.slides.length;
		// const counterElement = document.querySelector('.slider-bottom__count .value');

		// if (counterElement) {
		// 	counterElement.textContent = `${realIndex} / ${totalSlides}`;
		// } else {
		// 	console.warn('Элемент .slider-bottom__count .value не найден');
		// }
	}
}
