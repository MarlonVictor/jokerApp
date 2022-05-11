// Nav Animation
const navigationElement = document.querySelector('nav')
const navigationClasses = ['w-screen', 'bg-primary', 'text-white']

document.body.onscroll = () => {
    scrollY > 50 
        ? navigationElement?.classList.add(...navigationClasses)
        : navigationElement?.classList.remove(...navigationClasses)
}


// Nav toggle
const btnOpenNav = document.querySelector('[data-open]')
const btnCloseNav = document.querySelector('[data-close]')

btnOpenNav?.addEventListener('click', () => document.body.classList.add('menu-expanded'))
btnCloseNav?.addEventListener('click', () => document.body.classList.remove('menu-expanded'))