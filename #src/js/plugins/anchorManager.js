export function anchorManager(options = {}) {
  const {
    linkSelector = '.anchor-link',
    desktopOffset = 98,
    mobileOffset = 60,
    mobileBreakpoint = 768,
  } = options;

  // Получаем текущий offset
  const getOffset = () =>
    window.innerWidth <= mobileBreakpoint ? mobileOffset : desktopOffset;

  // Скролл к элементу
  const scrollToTarget = (target) => {
    const offset = getOffset();
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
  };

  // Обработка клика по якорям
  const handleClick = (e) => {
    const link = e.target.closest(linkSelector);
    if (!link) return;

    const url = new URL(link.href);

    const isSamePage = url.pathname === window.location.pathname;

    // Если это другая страница → не мешаем браузеру
    if (!isSamePage) return;

    const hash = url.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    scrollToTarget(target);
  };

  // Если пришли с другой страницы с hash
  const handleInitialHash = () => {
    if (!window.location.hash) return;

    const target = document.querySelector(window.location.hash);
    if (!target) return;

    // Небольшая задержка — чтобы DOM точно прогрузился
    setTimeout(() => {
      scrollToTarget(target);
    }, 50);
  };

  // Слушатели
  document.addEventListener('click', handleClick);
  window.addEventListener('load', handleInitialHash);
}
