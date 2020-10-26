import * as basicLightbox from 'basiclightbox';

function imageHandler(e) {
  const target = e.target;
  const bigUrl = target.dataset.url;
  const instance = basicLightbox.create(`
    <img src="${bigUrl}" width="800" height="600">
`);
  instance.show();
} //modal

export default imageHandler;
