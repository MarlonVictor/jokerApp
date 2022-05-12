"use strict";
// Nav Animation
var navigationElement = document.querySelector('nav');
var navigationClasses = ['w-screen', 'bg-primary', 'text-white'];
document.body.onscroll = function () {
    var _a, _b;
    scrollY > 50
        ? navigationElement === null || navigationElement === void 0 ? void 0 : (_a = navigationElement.classList).add.apply(_a, navigationClasses)
        : navigationElement === null || navigationElement === void 0 ? void 0 : (_b = navigationElement.classList).remove.apply(_b, navigationClasses);
};
// Nav Toggle
var btnOpenNav = document.querySelector('[data-open]');
var btnCloseNav = document.querySelector('[data-close]');
var navLinks = document.querySelectorAll('a[href^="#"]');
btnOpenNav === null || btnOpenNav === void 0 ? void 0 : btnOpenNav.addEventListener('click', function () { return document.body.classList.add('menu-expanded'); });
btnCloseNav === null || btnCloseNav === void 0 ? void 0 : btnCloseNav.addEventListener('click', function () { return document.body.classList.remove('menu-expanded'); });
navLinks === null || navLinks === void 0 ? void 0 : navLinks.forEach(function (link) { return link.addEventListener('click', function () { return document.body.classList.remove('menu-expanded'); }); });
// Init Scroll Reveal Animation
var scrollRevealConfig = {
    origin: 'top',
    distance: '60px',
    duration: 700
};
var scrollRevealElements = "\n    #home, \n    #home img, \n    #home .stats,\n    #services,\n    #services header,\n    #services .cards\n";
ScrollReveal(scrollRevealConfig).reveal(scrollRevealElements);
