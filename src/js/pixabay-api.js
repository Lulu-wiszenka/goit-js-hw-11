/*
У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
*/

import axios from 'axios';

export function getImagesByQuery(query) {
    return axios('https://pixabay.com/api/', {
        params: {
            key: '56141356-f92620e8971d743a7b3ebfb5b',
            q: `${query}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    });
}


/*
Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

key — твій унікальний ключ доступу до API.
q — слово для пошуку. Те, що буде вводити користувач.
image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
orientation — орієнтація фотографії. Постав значення horizontal.
safesearch — фільтр за віком. Постав значення true.
*/