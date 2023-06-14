"use strict";

function toggleNav() {
    var nav = document.querySelector('.nav__list');
    nav.classList.toggle('nav__list--active');
  }
  
  var burger = document.querySelector('.header__burger');
  burger.addEventListener('click', toggleNav);
  





