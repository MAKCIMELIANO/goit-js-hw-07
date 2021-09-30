import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const arrGallery = galleryItems
  .map(
    (image) =>
      `
        <div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                />
            </a>
        </div>
        `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", arrGallery);

gallery.addEventListener("click", onClick);

function onClick(evn) {
  evn.preventDefault();

  document.removeEventListener("keydown", onEscDown);

  if (evn.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evn.target.dataset.source}">`,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscDown);
      },
    }
  );

  instance.show();

  document.addEventListener("keydown", onEscDown);

  function onEscDown(evn) {
    if (evn.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscDown);
    }
  }
}
