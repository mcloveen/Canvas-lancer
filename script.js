"use strict";

function toggleNav() {
    let nav = document.querySelector('.nav__list');
    nav.classList.toggle('nav__list--active');
  }
  
  let burger = document.querySelector('.header__burger');
  burger.addEventListener('click', toggleNav);
  





