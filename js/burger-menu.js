'use strict';

window.onload = () => {
  const menu = document.querySelector('.menu');
  const burgerToggle = document.querySelector('.burger-toggle');
  const openBurger = document.querySelector('.open-burger');
  const closeBurger = document.querySelector('.close-burger');

  burgerToggle.addEventListener('click', () => {
    closeBurger.classList.toggle('hidden');
    openBurger.classList.toggle('hidden');
  });

  openBurger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
  });

  closeBurger.addEventListener('click', () => {
    menu.style.transform = 'translateX(-120%)';
  });
};
