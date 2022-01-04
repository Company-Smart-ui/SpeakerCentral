var swiper = new Swiper(".HomepageSwiperInit", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});