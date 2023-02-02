$(document).ready(function () {

  // SCROLL

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // MENU BURGER

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  const links = document.querySelectorAll('.nav__link');

  menuBtn.addEventListener('click', function () {
    body.classList.toggle('lock');
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function () {
    body.classList.remove('lock');
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
  });

  links.forEach(function (i) {
    i.addEventListener('click', function () {
      body.classList.remove('lock');
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  // SLIDER MAINSCREEN

  const slider = document.querySelector('.slider');

  $(slider).slick({
    accessibility: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nav: false
  });

  // WORKS FILTER

  const mixerContainer = document.querySelector('.works__top');
  const mixer = mixitup('.works__items');
  const mixBtns = document.querySelectorAll('.works__filter');
  const mixItems = document.querySelectorAll('.works__item');
  const allBtn = document.querySelector('.works__filter--all');

  mixBtns.forEach(function (i) {
    i.addEventListener('click', function () {
      mixerContainer.classList.add('active');
      mixItems.forEach(function (i) {
        i.classList.add('active');
      });
    });
  });

  allBtn.addEventListener('click', function () {
    mixerContainer.classList.remove('active');
    mixItems.forEach(function (i) {
      i.classList.remove('active');
    });
  });


  // SLIDER TEAM

  const sliderTeam = document.querySelector('.team-slider');

  $(sliderTeam).slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    nav: false
  });

  // MODAL

  const modalBtn = document.querySelector('.modal-btn');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');

  modalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.add('lock');
    modal.classList.add('active');
    modal.classList.add('active');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', function () {
    body.classList.remove('lock');
    modal.classList.remove('active');
    modalBtn.classList.remove('active');
    overlay.classList.remove('active');
  });

  modalClose.addEventListener('click', function () {
    body.classList.remove('lock');
    modal.classList.remove('active');
    modalBtn.classList.remove('active');
    overlay.classList.remove('active');
  });

});