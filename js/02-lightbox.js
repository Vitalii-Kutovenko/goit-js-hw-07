import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryList.appendChild(galleryItem);
});

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250
});
