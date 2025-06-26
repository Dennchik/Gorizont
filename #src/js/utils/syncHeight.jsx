//* --------------------------- [sync Height] ----------------------------------
export function syncHeight({
	sourceSelector,      // Селектор элемента, от которого берём высоту
	targetSelector,      // Селектор элемента, которому задаём высоту
	offset = 0,          // Разница в пикселях (по умолчанию 0)
	autoResize = true    // Обновлять ли при изменении размера окна
}) {
	const source = document.querySelector(sourceSelector);
	const target = document.querySelector(targetSelector);

	if (!source || !target) return;

	function updateHeight() {
		const height = source.offsetHeight;
		target.style.height = (height + offset) + 'px';
	}

	window.addEventListener('load', updateHeight);
	if (autoResize) window.addEventListener('resize', updateHeight);
}

