import apiService from './apiService';
import controller from './controller';
import { spinner } from './refs';

function fetchImages() {
  apiService
    .getImages() // получаем промис
    .then(images => {
      // обрабатываем его
      controller(images); // отрисовка\загрузка\дозагрузка
      window.scrollTo({
        top: document.documentElement.offsetHeight, //высота документа
        behavior: 'smooth', //плавная прокрутка
      });
    })
    .finally(() => {
      spinner.classList.add('is-hidden'); //прячем спиннер
    });
}

export default fetchImages;
