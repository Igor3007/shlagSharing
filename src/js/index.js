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
})

