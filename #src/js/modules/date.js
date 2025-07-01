document.addEventListener('DOMContentLoaded', function () {
	//* ------------------------------ [Date]-------------------------------------
	let dateContainer = document.querySelector('.performance__date');
	if (!dateContainer) return;

	let now = new Date();
	let options = { month: 'short' }; // Сокращённое название месяца
	let day = now.getDate();
	let month = new Intl.DateTimeFormat('ru-RU', options).format(now);

	// Убираем точку и делаем первую букву заглавной
	month = month.replace('.', '').charAt(0).toUpperCase() + month.slice(1, -1);

	dateContainer.innerHTML = `<div class="day">${day}</div> <div class="data-wrapper">
<div class="month">${month}</div><div class="status"><p>Доступен</br> для&nbsp;работы</p></div></div>`;
});