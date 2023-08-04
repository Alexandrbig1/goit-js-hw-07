import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesMenuEl = document.querySelector(".gallery");

function createImages(image) {
  return image
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" target="_blank" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

imagesMenuEl.insertAdjacentHTML("beforeend", createImages(galleryItems));

imagesMenuEl.addEventListener("click", openModalPhotoOnClick);

function openModalPhotoOnClick(e) {
  e.preventDefault();

  const currentImage = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${currentImage}" width="800" height="600">
`);

  if (e.target !== e.currentTarget) instance.show();

  window.addEventListener("keydown", closeOnEscClick);

  function closeOnEscClick(e) {
    if (e.code === "Escape") instance.close();
  }
}
