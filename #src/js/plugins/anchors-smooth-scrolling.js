export function anchorsSmoothScrolling(options = {}) {
  const {
    linkSelector = '.anchor-link',
    desktopOffset = 98,
    mobileOffset = 60,
    mobileBreakpoint = 768,
    closeMenuSelector = '.burger-button',
    sidebarSelector = '.sidebar-menu',
    openMenuClass = '_open-menu',
    noScrollClass = 'no-scroll',
  } = options;

  // Получаем актуальный offset
  const getOffset = () =>
    window.innerWidth <= mobileBreakpoint ? mobileOffset : desktopOffset;

  // Скролл к элементу
  const scrollToTarget = (target) => {
    if (!target) return;

    const offset = getOffset();
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
  };

  // Закрытие бокового меню
  const closeSidebarIfOpen = (clickedElement) => {
    const sidebarMenu = clickedElement.closest(sidebarSelector);
    if (!sidebarMenu) return;

    if (sidebarMenu.classList.contains(openMenuClass)) {
      const burgerButton = document.querySelector(closeMenuSelector);

      if (burgerButton) {
        burgerButton.classList.remove(openMenuClass);
      }

      document.body.classList.remove(noScrollClass);
    }
  };

  // Обработка кликов (делегирование)
  document.addEventListener('click', (e) => {
    const link = e.target.closest(linkSelector);
    if (!link) return;

    const url = new URL(link.href);

    const isSamePage =
      url.pathname === window.location.pathname &&
      url.origin === window.location.origin;

    // Если это переход на другую страницу — не мешаем браузеру
    if (!isSamePage) return;

    const hash = url.hash; // "#about"
    if (!hash) return;

    const targetElement = document.querySelector(hash);
    if (!targetElement) return;

    e.preventDefault();

    closeSidebarIfOpen(link);
    scrollToTarget(targetElement);
  });

  // Обработка перехода с другой страницы
  window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (!hash) return;

    const targetElement = document.querySelector(hash);
    if (!targetElement) return;

    // Небольшая задержка — на случай загрузки изображений/шрифтов
    setTimeout(() => {
      scrollToTarget(targetElement);
    }, 50);
  });
}
