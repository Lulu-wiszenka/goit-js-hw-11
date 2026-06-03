import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";


//gallery, loader, lightbox,



const form = document.querySelector("form");
const searchInput = document.querySelector('input[name="search-text"]');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    const inputValue = searchInput.value;
    if (!inputValue) {
        return;
    }
    showLoader();
    getImagesByQuery(inputValue)
        .then((data) => {
            if (data.hits.length > 0) {
                console.log(data.hits);
                createGallery(data.hits);
            } else {
                iziToast.error({
                  title: 'Error',
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(error => {
                iziToast.error({
                  title: 'Error',
                  message: `${error.message}`,
                });
        })
        .finally(() => {
            hideLoader();
            event.target.reset();
        })    
}



