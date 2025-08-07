//* Подключение модуля для работы с папками
import { deleteAsync } from 'del';
//* Удаление каталога build
export function clear() {
  return deleteAsync([`${$.path.root}`], { force: true })
    .then(() => {
      console.log('Содержимое папки build удален');
    })
    .catch((error) => {
      console.error('Ошибка при удалении папки build:', error);
    });
}
//* Удаление каталога Fonts
export function clearFonts() {
  return deleteAsync([`${$.path.root}/fonts`], { force: true })
    .then(() => {
      console.log('Папка fonts удалена');
    })
    .catch((error) => {
      console.error('Ошибка при удалении папки fonts:', error);
    });
}
