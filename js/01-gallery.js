import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
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

galleryEl.insertAdjacentHTML("afterbegin", markup);

const selectedImage = (evt) => {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const largeImg = target.dataset.source;
  const instance = basicLightbox.create(`
  	   <img src="${largeImg}" width="800" height="600">`);
  instance.show();
};

galleryEl.addEventListener("click", selectedImage);
