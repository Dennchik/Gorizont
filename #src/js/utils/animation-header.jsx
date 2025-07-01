//* --------------------------- [Animation Header] -----------------------------
export function animationHeader() {
	const header = document.querySelector('.header');
	const mainContent = document.querySelector('.page__main-content');
	const arrow = document.querySelector('.perform__footer > .arrow');
	if (header && mainContent) {
		// Именованная функция для обработки скроллинга
		const handleScroll = () => {
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				header.classList.remove('without-border');
				arrow.classList.remove('anime');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
				arrow.classList.add('anime');
			}
		};
		// Выполнение timeLineHeaderItem при загрузке
		// timeLineHeaderItem();

		// Добавление обработчика скроллинга
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			window.removeEventListener('scroll', handleScroll);
		});
	}
}