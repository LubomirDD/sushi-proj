function calcCartPriceAndDelivery() {

    const priceTotalElem = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const deliveryData = document.querySelector('[data-cart-delivery]');  


    const cartItems = document.querySelectorAll('.cart-item')
    // console.log(cartItems);
    let totalPrice = 0;

    cartItems.forEach(function (item) {
        // console.log(item);

        const amountElem = item.querySelector('[data-counter]');
        const priceElem = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountElem.innerText) * parseInt(priceElem.innerText);
        // console.log(currentPrice);
        totalPrice += currentPrice;
         console.log(totalPrice);

    })


    // Отображаем цену на странице
    priceTotalElem.innerText = totalPrice;



    // Скрываем/Показываем блок доставки
    if (totalPrice > 0) {
        deliveryData.classList.remove('none');
    } else {
        deliveryData.classList.add('none');
    }


    // Указываем стоимость доставки
    if (totalPrice >= 600) {

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';

    } else {

        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';


    }

   



}