import {
	// animateTitles,
	// tlVerticalOpacity,
	// tlVerticalReverse,
	// tlRotateIcon,
	// skewSetter,
	// animateImage,
	// tmBounce,
	// cassieEvans,
	applyParallax
} from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	// 	const bgSection = document.querySelector('.bg-section');
	// 	const parallax = document.querySelector('.parallax');

	if (!isMobile) {
		// 		tlVerticalOpacity();
		// 		tlVerticalReverse();
		// 		cassieEvans();
		// 		skewSetter();

		// 		tmBounce(
		// 			'.bounce-01',
		// 			'.tr-row-01',
		// 			'.tr-row-01',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		tmBounce(
		// 			'.bounce-02',
		// 			'.trigger-02',
		// 			'.trigger-02',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		animateTitles(
		// 			'.split-01',
		// 			'.split-trigger-01',
		// 			'.split-trigger-01',
		// 			'=150',
		// 			'=150',
		// 		);
		// 		animateTitles(
		// 			'.split-02',
		// 			'.split-trigger-02',
		// 			'.split-trigger-02',
		// 			'=150',
		// 			'=150',
		// 		);
		// 		animateTitles(
		// 			'.split-03',
		// 			'.split-trigger-03',
		// 			'.split-trigger-03',
		// 			'=150',
		// 			'=150',
		// 		);
		// 		animateTitles(
		// 			'.split-04',
		// 			'.split-trigger-04',
		// 			'.split-trigger-04',
		// 			'=150',
		// 			'=150',
		// 		);
		// 		animateTitles(
		// 			'.split-05',
		// 			'.split-trigger-05',
		// 			'.split-trigger-05',
		// 			'=150',
		// 			'=150',
		// 		);
		// 		animateImage(
		// 			'.img-tr-01',
		// 			'.img-tr-01',
		// 			'.img-tr-01',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		animateImage(
		// 			'.img-tr-02',
		// 			'.img-tr-02',
		// 			'.img-tr-02',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		animateImage(
		// 			'.img-tr-03',
		// 			'.img-tr-03',
		// 			'.img-tr-03',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		animateImage(
		// 			'.img-tr-04',
		// 			'.img-tr-04',
		// 			'.img-tr-04',
		// 			'=50',
		// 			'=50',
		// 		);
		// 		animateImage(
		// 			'.img-tr-05',
		// 			'.img-tr-05',
		// 			'.img-tr-05',
		// 			'=50',
		// 			'=50',
		// 		);

		// 		bgSection.style.display = 'none';
		// 	} else {
		// 		parallax.style.display = 'none';
		// 		bgSection.style.display = 'block';
		applyParallax('.bg-image');
	}


	// 	setTimeout(() => {
	// 		tlRotateIcon();
	// 	}, 2000);
});
