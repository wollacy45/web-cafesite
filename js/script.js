let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    carItem.classList.toggle('active');
}