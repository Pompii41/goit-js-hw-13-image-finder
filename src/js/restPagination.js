import imageHandler from './modal';
import { loadMore } from './refs';

function restPagination() {
  loadMore.classList.remove('is-hidden'); //показываем кнопку
  const imagesForModal = document.querySelectorAll('.image-wrp__image'); // получение массива картинок
  imagesForModal.forEach(e => e.addEventListener('click', imageHandler)); // получение текущей картинки
}
export default restPagination;
