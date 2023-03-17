"use strict";

const tabs = document.querySelectorAll(".choose__btn-item");
const contents = document.querySelectorAll(".choose__content-item");

function open(e) {
  const clickedBtn = e.target;
  const btnAttr = clickedBtn.dataset.btn;
  console.log();
  tabs.forEach((value) => {
    value.classList.remove("choose__btn-item_blue");
  });
  clickedBtn.classList.add("choose__btn-item_blue");

  contents.forEach((value) => {
    value.classList.remove("choose__content-item_open");
  });
  document
    .querySelector(`#${btnAttr}`)
    .classList.add("choose__content-item_open");
}

tabs.forEach((value) => {
  value.addEventListener("click", open);
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('menu__list_active')
})

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
});
