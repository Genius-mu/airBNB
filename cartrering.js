let close = document.querySelector("#close");
let body = document.querySelector("body");
let open = document.querySelector("#open");
let ham_content = document.querySelector(".hambur_content");
ham_content.style.display = "none";

close.style.display = "none";
open.addEventListener("click", () => {
  close.style.display = "flex";
  open.style.display = "none";
  ham_content.style.display = "flex";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "flex";
  ham_content.style.display = "none";
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
