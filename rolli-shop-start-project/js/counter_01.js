
// Находим элементы на странице

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем кнопку btnMinus
btnMinus.addEventListener('click', function () {

// Проверяем, что бы счетчик был больше 1
    
    if (parseInt(counter.innerText) > 1) {
        // Изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }

    
});


// Отслеживаем кнопку btnPlus 
btnPlus.addEventListener('click', function () {
    // Изменяем текст в счетчике увеличивая его на 1
    counter.innerText = ++counter.innerText;
});