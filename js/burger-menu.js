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
    menu.style.display = 'block';
  });

  closeBurger.addEventListener('click', () => {
    menu.style.display = 'none';
  });
};
