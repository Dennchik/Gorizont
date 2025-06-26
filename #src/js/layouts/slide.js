//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
export function mainSlide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			// effect: 'slide',
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: true,
			// },
			speed: 800,
			spaceBetween: 20,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			pagination: {
				el: '.slide__pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.slide__next',
				// prevEl: '.slide__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 3,
				},
				1140: {
					slidesPerView: 3,
				},
				1440: {
					slidesPerView: 3,
				}
			},

			on: {
				init: function () {
					updateSlideCounter(this);
				},
				slideChange: function () {
					updateSlideCounter(this);
				}
			}
		});
	}

	function updateSlideCounter(swiperInstance) {
		const realIndex = swiperInstance.realIndex + 1;
		const totalSlides = swiperInstance.slides.length;
		const counterElement = document.querySelector('.slide__count .slide__value');

		if (counterElement) {
			counterElement.textContent = `${realIndex} / ${totalSlides}`;
		} else {
			console.warn('Элемент .slider-bottom__count .value не найден');
		}
	}
}

export function slidePartners(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			// effect: 'slide',
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: true,
			// },
			speed: 800,
			spaceBetween: 40,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			navigation: {
				nextEl: '.slide__next',
				prevEl: '.slide__prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				490: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				}
			},
		});
	}
}