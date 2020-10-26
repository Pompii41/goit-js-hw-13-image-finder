import renderCards from './renderCards';
import restPagination from './restPagination';
import { loadMore, spinner } from './refs';

function controller(images) {
  if (images.length) {
    loadMore.classList.add('is-hidden'); //прячем кнопку
    spinner.classList.remove('is-hidden'); //запускаем спиннер
    renderCards(images); //отрисовка

    restPagination(); // по клику догружаем и отрисовываем
  } else {
    alert('no result were found for your search. Try again!');
  }
}

export default controller;
