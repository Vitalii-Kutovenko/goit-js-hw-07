import { galleryItems } from './gallery-items.js';
// Change code below this line

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

galleryList.addEventListener('click', event => {
    event.preventDefault();
  });

let currentModal = null;

const gallery = document.querySelector('.gallery');


gallery.addEventListener('click', onGalleryClick);


function onGalleryClick(event) {
 
  if (event.target.nodeName !== 'IMG') {
    return;
  }

 
  event.preventDefault();

 
  const imgUrl = event.target.dataset.source;

  
  currentModal = basicLightbox.create(`<img src="${imgUrl}">`);
  currentModal.show();

  document.addEventListener('keydown', onModalClose);
}

function onModalClose(event) {
  if (event.code === 'Escape') {
    currentModal.close();
    currentModal = null;

    document.removeEventListener('keydown', onModalClose);
  }
}

