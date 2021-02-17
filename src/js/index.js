import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
    Pagination,
    Navigation,
    Thumbs,
    Autoplay,
} from 'swiper';

svgPolyfill();
Swiper.use([Pagination, Navigation, Thumbs, Autoplay]);

import $ from 'jquery';
import './import/jquery.fancybox.min';
     
    

    function init(){
        var myMap = new ymaps.Map("maps-container", {
            center: [55.76, 37.64],
            zoom: 7,
            controls: []
        },
        {
            suppressMapOpenBlock: true
        });
    }

    if($('div').is('.maps-container')){
        ymaps.ready(init);
    }
 
$(document).ready(function () {

    /* init inputmask */
    
    function initInputMask(){
        $("input[type=tel]").inputmask({
            mask: '+7(999) 999-99-99',
            showMaskOnHover: false,
            oncomplete: function(elem){
                elem.target.setAttribute('area-valid', 'true')
            },
            onincomplete: function(elem){
                elem.target.setAttribute('area-valid', 'false')
            },
            oncleared: function(elem){
                elem.target.removeAttribute('area-valid')
            },
            onKeyValidation: function(elem){
                console.log(elem)
            }
        });
    }

    initInputMask();
})


// /* главная баннер */

// const bannerHome = new Swiper('.banner-home', {
//     autoplay: {
//         delay: 5000,
//       },
//     pagination: {
//         el: '.banner-home__dots',
//         clickable: true,
//         type: 'bullets',
        
//         renderBullet: function (index, className) {

//             console.log(this.params.autoplay.delay)

//             return '<div class="' + className + '"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
//             <circle class="progress-bg" cx="9" cy="9" r="8" stroke="black" stroke-opacity="0.3" stroke-width="2"/>\
//             <circle class="progress-bar" style="animation-duration: '+(this.params.autoplay.delay+500)+'ms;"  cx="9" cy="9" r="8" stroke="#309EC2" stroke-width="2"/>\
//             <circle class="progress-dot" cx="9" cy="9" r="5" /></circle></svg></div>';
//         },
//     },
//     navigation: {
//         nextEl: '.banner-home__next',
//         prevEl: '.banner-home__prev',
//     },
// });

// /* categories */

// const subCategories = new Swiper('.sub-categories', {
//     spaceBetween: 20,
//     slidesPerView: 5,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1.1,
//             spaceBetween: 10,
//           },
//         360: {
//             slidesPerView: 1.5,
//             spaceBetween: 10,
//           },
//         430: {
//             slidesPerView: 2.5,
//             spaceBetween: 10,
//           },
//         680: {
//           slidesPerView: 3.5,
//         },
//         880: {
//           slidesPerView: 4.5,
//         },
//         1380: {
//           slidesPerView: 5,
//         }
//       }
   
// });
 
// /* карточка */

// const galleryThumbs = new Swiper('.card-slider__thumbs', {
//     spaceBetween: 18,
//     slidesPerView: 9,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         0: {
//         slidesPerView: 4,
//         spaceBetween: 4,
//           },
//         480: {
//           slidesPerView: 5,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 7,
//           spaceBetween: 13,
//         },
//         1380: {
//           slidesPerView: 9,
//         }
//       }
// });


// function initialSlideCard(){
//     if(!document.querySelector('.swiper-video')){
//         return 0;
//     }else{
//         if(document.querySelectorAll('.card-slider__thumbs .swiper-wrapper > div').length <= 1){
//             return 0;
//         }else{
//             return 1;
//         }
//     }
// }


// const galleryTop = new Swiper('.card-slider__gallery', {
//     spaceBetween: 10,
//     initialSlide: initialSlideCard(),

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         0: {
//             pagination: {
//                 el: '.swiper-dots',
//                 type: 'bullets',
//             }
//         }
//     },
//     thumbs: {
//         swiper: galleryThumbs
//     }
// });

// galleryTop.on('slideChange', function () {
//     $('.video').removeClass('play');
//     $('.video').find('iframe').remove();
//     $('.swiper-topbar, .swiper-bottombar').show()
// });

// /* design banner */

// const bannerDesign = new Swiper('.room-banner-swiper', {
//     autoplay: {
//         delay: 5000,
//       },
//     pagination: {
//         el: '.swiper-dots-progress',
//         clickable: true,
//         type: 'bullets',
        
//         renderBullet: function (index, className) {

//             console.log(this.params.autoplay.delay)

//             return '<div class="' + className + '"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
//             <circle class="progress-bg" cx="9" cy="9" r="8" stroke="black" stroke-opacity="0.3" stroke-width="2"/>\
//             <circle class="progress-bar" style="animation-duration: '+(this.params.autoplay.delay+500)+'ms;"  cx="9" cy="9" r="8" stroke="#309EC2" stroke-width="2"/>\
//             <circle class="progress-dot" cx="9" cy="9" r="5" /></circle></svg></div>';
//         },
//     },
     
// });

 

// /* tabs in basket */

// if(document.querySelector('[data-tabs=delivery]')){
//     const tabsDelivery = tabs({
//         el: '[data-tabs=delivery]',
//         tabNavigationLinks: '.tab-link',
//         tabContentContainers: '.tab-content'
//     }).init();
// }



// /* hide maps in basket */

// $('.map-delivery__hide').on('click', function(){
//     if(!$(this).hasClass('active') ){
//         $(this).find('span>span').text('Показать карту');
//     }else{
//         $(this).find('span>span').text('Скрыть карту');
//     }

//     $(this).parent().children('.map-delivery__map').slideToggle(300)
//     $(this).toggleClass('active');
// })

// /* show gallery design */

// var textDefault = false;

// $('.sports-room__gallery-all a').on('click', function(e){
//     e.preventDefault();

//     let textChange = 'Скрыть';
//     textDefault = (textDefault ? textDefault : $(this).text())

//     $(this).parents('.sports-room__gallery').toggleClass('active');

//     if(!$(this).parents('.sports-room__gallery').hasClass('active')){
//         $(this).text(textDefault);
//     }else{
//         $(this).text(textChange);
//     }
// })



// /* show gallery contacts */

// $('.contacts-item__gallery').each(function(){
//     let count = $(this).find('li.hide').length;
//     $(this).find('.contacts-item__gallery-all span').text('Еще '+count+' фото')
// })

// $('.contacts-item__gallery-all').on('click', function(e){
//     e.preventDefault();
//     let textChange = 'Скрыть';
//     textDefault = (textDefault ? textDefault : $(this).find('span').text())
//     $(this).parents('.contacts-item__gallery').toggleClass('active');

//     if(!$(this).parents('.contacts-item__gallery').hasClass('active')){
//         $(this).find('span').text(textDefault);
//     }else{
//         $(this).find('span').text(textChange);
//     }
// })





// $('[data-tocart]').on('click', function(){
//     if(!$(this).hasClass('active') ){
//         $(this).find('span').text('Товар в корзине');
//         $('.header__basket a span').text('3 товара — 1 566 800 ₽');
//     }else{
//         $(this).find('span').text('В корзину');
//         $('.header__basket a span').text('Ваша корзина пуста');
//     }

//     $(this).toggleClass('active')
//     $('.header__basket a').toggleClass('active')
// })

// $(document).ready(function () {

//     /* init inputmask */
    
//     function initInputMask(){
//         $("input[type=tel]").inputmask({
//             mask: '+7(999) 999-99-99',
//             showMaskOnHover: false,
//             oncomplete: function(elem){
//                 elem.target.setAttribute('area-valid', 'true')
//             },
//             onincomplete: function(elem){
//                 elem.target.setAttribute('area-valid', 'false')
//             },
//             oncleared: function(elem){
//                 elem.target.removeAttribute('area-valid')
//             },
//             onKeyValidation: function(elem){
//                 console.log(elem)
//             }
//         });
//     }

//     initInputMask();

//     $('.minicard__one-click, .card-action__one-click').on('click', function(){
//         $.fancybox.open({
//             src  : '/_popup-oneclick.html',
//             type : 'ajax',
//             opts : {
//                 afterShow : function( instance, current ) {
//                     /* init inputmask */
//                     initInputMask()
//                 }
//             }
//         })
//     })

//     $('[data-fancybox-ajax]').on('click', function(){

//         const url = $(this).data('src');

//         $.fancybox.open({
//             src  : url,
//             type : 'ajax',
//             opts : {
//                 afterShow : function( instance, current ) {
//                     /* init inputmask */
//                     initInputMask()
//                 }
//             }
//         })
//     })

    

//     if ($(window).width() < 1100) {
//         const menuCat = $('.menu-categories').clone();
//         $('.actual-product').prepend(menuCat);
//         $('.left-aside--category').find('.menu-categories').remove()
//     }

//     $('.catalog-filter__title').on('click', function () {
//         $(this).parent().toggleClass('open');

//         var elem = $(this);

//         setTimeout(function(){
//             if(!elem.parent().hasClass('open')){
//                 elem.parent().removeClass('scroll')
//             }else{
//                 elem.parent().addClass('scroll')
//             }
//         }, 300)

//         $(this).children('.icon-cross').toggleClass('active');
//     })

//     //выпадащий в мобильном

//     $('ul[data-ul-select] li').on('click', function (event) {

//         if ($(this).hasClass('active')) {
//             event.preventDefault();
//         }

//         $('ul[data-ul-select] li ').removeClass('active')
//         $(this).addClass('active')
//         $(this).parent().toggleClass('open');
//     })

//     //hide

//     $('[data-filter-open]').on('click', function(){
//         $('.catalog-filter').toggleClass('open')
//     })
//     $('[data-filter-close]').on('click', function(){
//         $('.catalog-filter').removeClass('open')
//     })

//     $(document).mouseup(function (e){  
//         var div = $(".catalog-filter__wrp");  //класс элемента вне которого клик
//         if (!div.is(e.target) && div.has(e.target).length === 0) {  
//                 //закрыть popup
//                 $('.catalog-filter').removeClass('open')
//         }
//       });

//     function stickyCard (){
//         if($(window).width() > 1100 && $('div').is('.catalog-card')){
//             const offsetStickyElem = $('.catalog-card__aside').offset().top;
//             const height1 = $('.catalog-card').height();
//             const height2 = $('.catalog-card--info').height();
//             const scrollTop = $(window).scrollTop();
//             const heightSticky = $('.card-action').height();
//             const heightFixedHeader = 67;


//             if(scrollTop > (offsetStickyElem - heightFixedHeader) && scrollTop < (height1+height2+offsetStickyElem-heightSticky-30)){
//                 if(!$('.card-action').hasClass('sticky')){
//                     $('.card-action').addClass('sticky').css({
//                         top: heightFixedHeader + 'px'
//                     })
//                 }
//             }else{
//                 $('.card-action').removeClass('sticky').css({
//                     top: 0
//                 })
//             }  
//         }else{
//             $('.card-action').removeClass('sticky').css({
//                 top: 0
//             })
//         }
//     }

//     function stickyScrollTop(){
//         if($(window).width() > 1100 && $('div').is('.news-deatail__scrolltop')){
//             const height1 = $('.news-deatail-top').height();
//             const height2 = $('.news-deatail-article').height();
//             const scrollTop = $(window).scrollTop();
//             const offsetStickyElem = $('.news-deatail-article').offset().top;

//             const heightWindow = $(window).height();
//             const heightFixedHeader = 67;


//             if(scrollTop > offsetStickyElem && scrollTop < (offsetStickyElem+height2-(heightWindow/1.5))){
//                 if(!$('.news-deatail__scrolltop').hasClass('sticky')){
//                     $('.news-deatail__scrolltop').addClass('sticky');
//                 }
//             }else{
//                 $('.news-deatail__scrolltop').removeClass('sticky')
//             }  
//         }else{
//             $('.news-deatail__scrolltop').removeClass('sticky')
//         }
//     }

//     function headerFixed(){

//         const heightHeader = $('.header').height();
//         const scrollTop = $(document).scrollTop();

//         if(scrollTop > heightHeader){
//             $('.header').addClass('fixed');
//             $('.fixed-phone').removeClass('active');
//             $('main').css({
//                 'margin-top': 0 + 'px'
//             })
//         }else{
//             $('.header').removeClass('fixed');
//             $('.fixed-phone').addClass('active');
//             $('main').css({
//                 'margin-top': 0
//             })
//         }
        
//     }

//     $(window).on('scroll', function(){

//         stickyCard();
//         headerFixed();
//         stickyScrollTop()

//     })

//     //// scroll
//     var $page = $('html, body');
//     $('.catalog-card__nav a').click(function() {

//         $('.catalog-card__nav a').removeClass('active')
//         $(this).addClass('active')

//         const heightFixedHeader = $('.header__callback').height();
//         const heightFixedNav = $('.catalog-card__nav').height();

//         $page.animate({
//             scrollTop: $($.attr(this, 'href')).offset().top - heightFixedHeader - 10 - heightFixedNav
//         }, 400);
//         return false;
//     });

//     // card fullscreen
    
//     $('.swiper-bottombar__fullscreen').on('click', function(){

        
//         var img = $('.card-slider__gallery .swiper-slide-active').find('.bgimage').css('background-image');
//         img = img.replace(/(url\(|\)|")/g, '');

//         $.fancybox.open({
//             src  : img,
//             type : 'image',
//             opts : {
//                 afterShow : function( instance, current ) {
//                     /* init inputmask */
//                 }
//             }
//         })
//     })

//     $('.add-phone').on('click', function(){
//         const html = $('[data-phone]').last().clone();

//         html.find('input').val('').removeAttr('area-valid')

//         if($('[data-phone]').length <= 2 ){
//             $(this).parent().before(html);
//             initInputMask();
//         }

        
//     })

//     /* init maps */
//     function mapsContainer(){
//         if(document.querySelector('.maps-container')){
//                 ymaps.ready(function () {

//                 const mapsElements = document.querySelectorAll('.maps-container');

//                 mapsElements.forEach(function(item, index){
//                 const coordinates = item.getAttribute('data-coordinates').split(',');
//                 var container = item.children['maps-container'];
                
//                     var myMap = new ymaps.Map(container, {
//                             center: coordinates,
//                             zoom: 12
//                         }),
                
//                         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                             hintContent: 'Собственный значок метки',
//                             balloonContent: 'Это красивая метка'
//                         }, {
//                             iconLayout: 'default#image',
//                             iconImageHref: '../img/svg/ic_pin.svg',
//                             iconImageSize: [30, 42],
//                             iconImageOffset: [-5, -38]
//                         })
                
//                     myMap.geoObjects
//                         .add(myPlacemark)
//                 });
//             })
//         }
//     }

//     mapsContainer();

//     // show all cat in news
//     $('.page-article__aside-all').on('click', function(){
//         $('.page-article__aside-list').toggleClass('open');
//         $(this).find('svg').toggleClass('rotate');

//         if ($('.page-article__aside-list').hasClass('open')){
//             $(this).children('span').text('Скрыть');
            
//         }else{
//             $(this).children('span').text('Показать еще');
//         }
//     })

//     // scrolltop

    
//     $('.news-deatail__scrolltop').on('click', function(){
//         $('body, html').animate({
//             scrollTop: 0
//         }, 400);
//     })

//     // форма добавления отзыва

//     $('[data-review="show"]').on('click', function(event){
//         $('.card-review__add').slideToggle(250);
//         $(this).parents('.card-info__item').find('input').first().focus();
//     })




// });