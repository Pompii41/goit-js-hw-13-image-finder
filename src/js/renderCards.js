import galleryItemMarkup from '../template/gallery-list-item.hbs';
import { gallery } from './refs';

function renderCards(images) {
  const markup = galleryItemMarkup(images);
  return gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderCards;
