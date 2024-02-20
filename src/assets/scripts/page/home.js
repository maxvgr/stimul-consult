import IMask from "imask/holder";

import Swiper from "swiper";
// import PanelSnap from "../../libs/panelsnap/panelsnap";
// import "particles.js";

import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
  Mousewheel,
} from "swiper/modules";
// import { scrollDirection } from "../../global/var";
// import { MediaQuery } from "../../global/func";
// import { breakpoint } from "../../global/settings";
// import { Collapse } from "../../utils/collapse";

// export const hero = document.querySelector("#home-hero");

// const heroVideos = document.querySelectorAll("#home-hero video");

new Swiper("#home-page .swiper", {
  modules: [Navigation, Pagination, EffectFade, Autoplay],

  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  breakpoints: {

    1400: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  },

  // speed: 2000,
  // simulateTouch: false,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  navigation: {
    nextEl: "#home-page .swiper .swiper-button-next",
    prevEl: "#home-page .swiper .swiper-button-prev",
  },

  pagination: {
    el: "#home-page .swiper-pagination",
    type: "bullets",
    clickable: true,
  },


});


new Swiper("#team-page .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },

  navigation: {
    nextEl: "#team-page .swiper .swiper-button-next",
    prevEl: "#team-page .swiper .swiper-button-prev",
  },
});


// Считываем поле ввода
let phoneInput = document.querySelector(".phone");
// Считываем кнопку
let btn = document.querySelector(".btn");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7} (000)-000-00-00",
});

// Обработчик события для инпута
phoneInput.addEventListener("input", phoneInputHandler);
// Обработчик события для кнопки
btn.addEventListener("click", btnHandler);

// Если ввели правлильно - кнопка активна
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}

// Отправляем номер телефона
async function btnHandler(e) {
  e.preventDefault();
  return await fetch("send_msg.php", {
    method: "POST",
    body: phoneMask.unmaskedValue,
  });
}