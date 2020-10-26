import './styles.scss';
import 'basiclightbox/dist/basicLightbox.min.css';
import fetchImages from './js/fetchImages.js';
import apiService from './js/apiService';
import { searchForm, loadMore, gallery } from './js/refs';

searchForm.addEventListener('submit', formHandler);
loadMore.addEventListener('click', fetchImages);

function formHandler(e) {
  e.preventDefault();
  const form = e.currentTarget;
  apiService.setQuery = form.elements.query.value; //записываем значение инпута в переменную
  form.reset(); //очистка запроса
  gallery.innerHTML = ''; //очистка контейнера
  apiService.resetPage(); //сбрасывание номера страницы на 1

  fetchImages();
}
