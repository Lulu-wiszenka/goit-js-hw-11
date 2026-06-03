import axios from 'axios';

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { gallery, loader, lightbox, createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

/*
У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
*/





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
        .then((res) => {
            if (res.data.hits.length > 0) {
                console.log(res.data.hits);
                createGallery(res.data.hits);
            } else {
                iziToast.error({
                  title: 'Error',
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(error => {
        console.log("error message: ", error)
        })
        .finally(() => {
            hideLoader();
            event.target.reset();
        })    
}



