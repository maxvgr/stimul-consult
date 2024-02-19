import Swiper from "swiper";

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

new Swiper("#team-page .swiper", {
  modules: [Navigation, Autoplay],

  // slidesPerView: 1,
  // spaceBetween: 0,

  navigation: {
    nextEl: "#team-page .swiper .swiper-button-next",
    prevEl: "#team-page .swiper .swiper-button-prev",
  },
});


