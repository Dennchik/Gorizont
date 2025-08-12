//* - [ Управление оповещением cookies ] -
export function cookiesAccept(el, trigger) {
  const cookiesAccept = document.querySelector(el);
  const button = document.querySelector(trigger);

  if (!cookiesAccept) {
    console.log('Элемент cookiesAccept не найден');
    return;
  }

  if (button)
    button.addEventListener('click', () => {
      cookiesAccept.style.transform = 'translateY(100%)';
      cookiesAccept.style.transition = 'transform 0.4s ease';
    });
  else {
    console.log('кнопка не найдена');
  }

  setTimeout(() => {
    cookiesAccept.style.transform = 'translateY(0)';
    cookiesAccept.style.transition = 'transform 0.5s ease';
  }, 5000);
}

//* - [ Открыть/закрыть модальное окно ] -
export function modalPage() {
  const policyLinks = document.querySelectorAll('.policy');
  const personalData = document.querySelector('.personal-data');
  const dataIcon = document.querySelector('.personal-data__icon');

  policyLinks.forEach((policyLink) => {
    policyLink.addEventListener('click', () => {
      personalData.classList.remove('_hide');
      personalData.classList.add('_show');
      personalData.style.zIndex = '14';
      document.body.classList.add('no-scroll');
    });
  });

  dataIcon.addEventListener('click', () => {
    personalData.classList.remove('_show');
    personalData.classList.add('_hide');
    document.body.classList.remove('no-scroll');
    setTimeout(function removethis() {
      personalData.style.zIndex = '0';
    }, 2000);
  });
}
