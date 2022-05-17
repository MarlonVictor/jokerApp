"use strict";
// Scroll Animation
var navigationElement = document.querySelector('nav');
var navigationClasses = ['scroll', 'w-screen', 'bg-primary', 'text-white'];
var backToTopButton = document.querySelector('#backToTop');
var backToTopClass = 'show';
document.body.onscroll = function () {
    var _a, _b;
    activateMenuAtCurrentSection('#home');
    activateMenuAtCurrentSection('#services');
    activateMenuAtCurrentSection('#about');
    activateMenuAtCurrentSection('#contact');
    scrollY > 50
        ? navigationElement === null || navigationElement === void 0 ? void 0 : (_a = navigationElement.classList).add.apply(_a, navigationClasses)
        : navigationElement === null || navigationElement === void 0 ? void 0 : (_b = navigationElement.classList).remove.apply(_b, navigationClasses);
    scrollY > 500
        ? backToTopButton === null || backToTopButton === void 0 ? void 0 : backToTopButton.classList.add(backToTopClass)
        : backToTopButton === null || backToTopButton === void 0 ? void 0 : backToTopButton.classList.remove(backToTopClass);
};
// Nav Toggle
var btnOpenNav = document.querySelector('[data-open]');
var btnCloseNav = document.querySelector('[data-close]');
var navLinks = document.querySelectorAll('a[href^="#"]');
btnOpenNav === null || btnOpenNav === void 0 ? void 0 : btnOpenNav.addEventListener('click', function () { return document.body.classList.add('menu-expanded'); });
btnCloseNav === null || btnCloseNav === void 0 ? void 0 : btnCloseNav.addEventListener('click', function () { return document.body.classList.remove('menu-expanded'); });
navLinks === null || navLinks === void 0 ? void 0 : navLinks.forEach(function (link) { return link.addEventListener('click', function () { return document.body.classList.remove('menu-expanded'); }); });
// Change Active Menu Item
function activateMenuAtCurrentSection(section) {
    var targetLine = scrollY + innerHeight / 2;
    var sectionEl = document.querySelector(section);
    var sectionTop = sectionEl === null || sectionEl === void 0 ? void 0 : sectionEl.offsetTop;
    var sectionHeight = sectionEl === null || sectionEl === void 0 ? void 0 : sectionEl.offsetHeight;
    var sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
    var sectionEndsAt = sectionTop + sectionHeight;
    var sectionEndPassedTargetline = sectionEndsAt <= targetLine;
    var sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;
    var sectionId = sectionEl.getAttribute('id');
    var menuElement = document.querySelector(".menu a[href*=".concat(sectionId, "]"));
    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }
}
// Init Scroll Reveal Animation
var scrollRevealConfig = {
    origin: 'top',
    distance: '60px',
    duration: 700
};
var scrollRevealElements = "\n    #home, \n    #home img, \n    #home .stats,\n    #services,\n    #services header,\n    #services .cards,\n    #about,\n    #about header,\n    #about .content,\n    #contact,\n    #contact header,\n    #contact .content\n";
ScrollReveal(scrollRevealConfig).reveal(scrollRevealElements);
