const sidebar = document.querySelector('.sidebar__menu');
const toggle = document.querySelector('.sidebar__burger');
const burger = document.querySelector('.burger');
const burgerBefore = document.querySelector('.burger-before');
const burgerAfter = document.querySelector('.burger-after');



toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar__menu')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

    if (burger.className === 'burger')
        burger.classList.add('open');
    else
        burger.classList.remove('open');
    
    if (burgerBefore.className === 'burger-before')
        burgerBefore.classList.add('open');
    else
        burgerBefore.classList.remove('open');

    if (burgerAfter.className === 'burger-after')
        burgerAfter.classList.add('open');
    else
        burgerAfter.classList.remove('open');
});