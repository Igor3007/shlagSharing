import Swiper, {
    Pagination
} from 'swiper';


Swiper.use([Pagination]);


if (document.documentElement.clientWidth > 480){
    
    const minicardCallery = new Swiper('.minicard__image.swiper-container ', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },
    })
}