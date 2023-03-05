// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryGrid = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/>
      </a>
      </div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryGrid);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
