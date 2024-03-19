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
  loop: false,

  breakpoints: {

    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
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
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true,

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
      spaceBetween: 10
    }
  },

  navigation: {
    nextEl: "#team-page .swiper-button-next",
    prevEl: "#team-page .swiper-button-prev",
  },
});


if (document.querySelector('#home-page')) {

  require("fslightbox");

  }

