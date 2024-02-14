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

export const hero = document.querySelector("#home-hero");

// const heroVideos = document.querySelectorAll("#home-hero video");

new Swiper("#home-hero .swiper", {
  modules: [Navigation, Pagination, EffectFade, Autoplay],

  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,

  // speed: 2000,
  // simulateTouch: false,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  navigation: {
    nextEl: "#home-hero .swiper .swiper-button-next",
    prevEl: "#home-hero .swiper .swiper-button-prev",
  },

  pagination: {
    el: "#home-hero .swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // on: {
  //   slideChangeTransitionStart: function (instance) {
  //     for (const video of heroVideos) {
  //       video.pause();
  //     }

  //     const activeIndex = instance.activeIndex;
  //     const activeSlide = instance.slides[activeIndex];
  //     const activeSlideVideo = activeSlide.querySelectorAll("video")[0];
  //     if (activeSlideVideo) {
  //       activeSlideVideo.play();
  //     }
  //   },
  // },
});