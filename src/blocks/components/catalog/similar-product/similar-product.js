import Swiper, {
    Navigation
} from 'swiper';
Swiper.use([Navigation]);

/* главная */

const similarProduct__swiper = new Swiper('.similar-product__swiper', {
    slidesPerView: 4,
    spaceBetween: 18,
    navigation: {
        nextEl: '.similar-product__swiper.swiper-nav__next',
        prevEl: '.similar-product__swiper.swiper-nav__prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.3,
        },
        380: {
          slidesPerView: 1.8,
        },
        580: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1380: {
          slidesPerView: 4,
        }
      }
});

const similarProduct__two = new Swiper('.swiper-two', {
    slidesPerView: 4,
    spaceBetween: 18,
    navigation: {
        nextEl: '.swiper-two.swiper-nav__next',
        prevEl: '.swiper-two.swiper-nav__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      380: {
        slidesPerView: 1.8,
      },
      580: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
      1380: {
        slidesPerView: 4,
      }
    }
});