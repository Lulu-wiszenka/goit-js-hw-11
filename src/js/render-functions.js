/* 
У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.

clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.

showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

Кожне зображення описується об'єктом, з якого тебе цікавлять лише такі властивості:

webformatURL — посилання на маленьке зображення для списку карток у галереї
largeImageURL — посилання на велике зображення для модального вікна
tags — рядок з описом зображення. Підійде для атрибута alt
likes — кількість вподобайок
views — кількість переглядів
comments — кількість коментарів
downloads — кількість завантажень

*/
export const container = document.querySelector(".gallery");
export const loader = document.querySelector("#loader");

export function createGallery(arr, lightbox) {
    container.innerHTML = arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return
        `<li class="gallery-item">
          <a class="gallery-link-img" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" class="gallery-img"/>
          </a>
          <div class="descr-container">
            <h3 class="gallery-likes"> Likes ${likes} </h3>
            <h3 class="gallery-views"> Views ${views} </h3>
            <h3 class="gallery-comments"> Comments ${comments} </h3>
            <h3 class="gallery-downloads"> Downloads ${downloads} </h3>
          </div>
        </li>`
    }).join("");

    lightbox.refresh();
}

export function clearGallery() {
    container.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}