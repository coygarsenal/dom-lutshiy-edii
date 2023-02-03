const navbar = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.navbar__burger');
const body = document.querySelector('body');
const lists = document.querySelectorAll('.navbar__list-item');
const btn = document.querySelector('.navbar__order');


burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
    if (navbar.classList.contains('active')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
})

lists.forEach(elem => {
    elem.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})

btn.addEventListener('click', () => {
    navbar.classList.remove('active')
})

