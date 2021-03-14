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
import 'inputmask/dist/jquery.inputmask';
     

 window.onload = function() {
    document.querySelector('body').classList.add('page-loaded')

  };
 
$(document).ready(function () {

    var ua = navigator.userAgent;

    if(/Chrome/i.test(ua)){
       $('html').addClass('chrome-navbar');
    }


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

    $(document).on('click', '.select-digit span', function(){

        const summ = $(this).text()
        $(this)
            .parents('form')
            .find('input')
            .val(summ)
    })

    /*mobile menu*/
    function mobileMenu() {
        this.buttonElem = '.burger';
        this.menuElem = '.personal-layout__aside';
        this.iconMenu = 'ic_menu';
        this.iconClose = 'ic_close';

        this.onOpen = function () {

            $('' + this.buttonElem + '').toggleClass('open')
            $('' + this.buttonElem + '').parent().toggleClass('open-parent')
            $('' + this.menuElem + '').toggleClass('open')

            $('body').append('<div class="mobile-bg" ></div>')


            return true;
        };

        this.onClose = function () {
            $('' + this.buttonElem + '').removeClass('open');
            $('' + this.menuElem + '').removeClass('open');
            $('' + this.buttonElem + '').parent().removeClass('open-parent')
            $('.mobile-bg').remove()
        }
    }

    var mobileMenu = new mobileMenu();

    $(document).on('click', '.burger', function(){


        if ($('.burger').hasClass('open')) {
            mobileMenu.onClose()
        }else{
            mobileMenu.onOpen()
        }

        // $(this).toggleClass('open')
        // $(this).parent().toggleClass('open-parent')
        // $('.personal-layout__aside').toggleClass('open')
    })

    //закрыть при клике вне
    $(document).on('click', function (e) {
        var div = $(".burger, .personal-layout__aside"); //класс элемента вне которого клик
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          //закрыть popup
        //   if ($('.burger').hasClass('open')) {
        //     $('.personal-layout__aside').remove('open')
        //     $('.burger').toggleClass('open')
        //   }

        mobileMenu.onClose()
  
        }
      });
})

