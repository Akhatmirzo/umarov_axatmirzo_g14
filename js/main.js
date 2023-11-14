const nav__list = document.querySelector('.nav__list');
const menu__btn = document.querySelector('.menu__btn');

menu__btn.addEventListener('click', () => {
    nav__list.classList.toggle('nav__active');
})
