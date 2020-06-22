'use strict';

$(document).ready(function(){
  $('.news-slider').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: '<img class="slick-next" src="../img/next-arrow.svg">',
          prevArrow: false,
          variableWidth: true,
        }
      }
    ]
  });
});



const open = document.querySelector('.header-burger__icon');
const openMenu = document.querySelector('.header-burger__nav');


open.addEventListener('click', function(event){
  event.stopPropagation()
  open.classList.toggle('burger-close');
  openMenu.classList.toggle('active');
});

const body = document.querySelector('body');

body.addEventListener('click', function(){
  open.classList.remove('burger-close');
  openMenu.classList.remove('active');
});