// Scroll Animation
const navigationElement = document.querySelector('nav')
const navigationClasses = ['scroll', 'w-screen', 'bg-primary', 'text-white']

const backToTopButton = document.querySelector('#backToTop')
const backToTopClass = 'show'

document.body.onscroll = () => {
    activateMenuAtCurrentSection('#home')
    activateMenuAtCurrentSection('#services')
    activateMenuAtCurrentSection('#about')
    activateMenuAtCurrentSection('#contact')

    scrollY > 50 
        ? navigationElement?.classList.add(...navigationClasses)
        : navigationElement?.classList.remove(...navigationClasses)

    scrollY > 500 
        ? backToTopButton?.classList.add(backToTopClass)
        : backToTopButton?.classList.remove(backToTopClass)
}


// Nav Toggle
const btnOpenNav = document.querySelector('[data-open]')
const btnCloseNav = document.querySelector('[data-close]')
const navLinks = document.querySelectorAll('a[href^="#"]')

btnOpenNav?.addEventListener('click', () => document.body.classList.add('menu-expanded'))
btnCloseNav?.addEventListener('click', () => document.body.classList.remove('menu-expanded'))
navLinks?.forEach(link => link.addEventListener('click', () => document.body.classList.remove('menu-expanded')))


// Change Active Menu Item
function activateMenuAtCurrentSection(section: string) {
    const targetLine = scrollY + innerHeight / 2

    const sectionEl = document.querySelector(section) as HTMLElement
    const sectionTop = sectionEl?.offsetTop
    const sectionHeight = sectionEl?.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = sectionEl.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) as HTMLElement

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

// Init Scroll Reveal Animation
const scrollRevealConfig = {
    origin: 'top',
    distance: '60px',
    duration: 700,
}

const scrollRevealElements = `
    #home, 
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content
`

ScrollReveal(scrollRevealConfig).reveal(scrollRevealElements)