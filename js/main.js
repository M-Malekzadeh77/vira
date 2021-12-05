// Initialize Swiper
var swiper = new Swiper(".productsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // slidesPerGroup: 2,
    autoplay: {
      delay: 7500,
      disableOnInteraction: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".commentSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    coverflowEffect: {
      rotate: 50,
      stretch: 18,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },    
    breakpoints: {
      640: {
        slidesPerView: 1.3,
        coverflowEffect: {
          stretch: 15,
        },
      },
      768: {
        slidesPerView: 1.5,
        coverflowEffect: {
          stretch: 60,
        },
      },
      992: {
        slidesPerView: 2,
        coverflowEffect: {
          stretch: 40,
        },
      },
      1200: {
        slidesPerView: 2.8,
        coverflowEffect: {
          stretch: 0,
        },
      },
    },
    autoplay: {
      delay: 9000,
      disableOnInteraction: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });