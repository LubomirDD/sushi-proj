

// Добавляем прослушку на всем окне

window.addEventListener('click', function (event) {

    // Обьявляем переменную для счетчика 
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // Находим div с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');   
    };

     
    
    
    // Проверяем, является ли элемент, по которому был совершен клик, кнопокой плюс
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    }

    // Проверяем, является ли элемент, по которому был совершен клик, кнопокой минус
    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
        // Изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }
        
    }
});