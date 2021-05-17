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

import $, {
    fancybox
} from 'jquery';
import './import/jquery.fancybox.min';
import 'inputmask/dist/jquery.inputmask';
import './import/jquery.suggestions.min';



window.onload = function () {
    document.querySelector('body').classList.add('page-loaded')
};

$(document).ready(function () {

    var ua = navigator.userAgent;

    if (/Chrome/i.test(ua)) {
        $('html').addClass('chrome-navbar');
    }

    if (/Safari/i.test(ua)) {
        $('html').addClass('safari-navbar');
    }

    /* init inputmask */

    function initInputMask() {
        $("input[type=tel]").inputmask({
            mask: '+7(999) 999-99-99',
            showMaskOnHover: false,
            oncomplete: function (elem) {
                elem.target.setAttribute('area-valid', 'true')
            },
            onincomplete: function (elem) {
                elem.target.setAttribute('area-valid', 'false')
            },
            oncleared: function (elem) {
                elem.target.removeAttribute('area-valid')
            },
            onKeyValidation: function (elem) {
                console.log(elem)
            }
        });
    }

    initInputMask();

    $(document).on('click', '.select-digit a', function () {

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

    $(document).on('click', '.burger', function () {


        if ($('.burger').hasClass('open')) {
            mobileMenu.onClose()
        } else {
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

    $(document).on('click', '.close-fancybox .btn', function (event) {
        $.fancybox.close()
    })

    $(document).on('submit', '#send-support', function (event) {
        event.preventDefault()

        $(this).find('input').each(function () {
            if ($(this).val() == '') {
                $(this).parents('.input-primary').addClass('empty-field')
            } else {
                $(this).parents('.input-primary').removeClass('empty-field')
            }
        })

        if (!$(this).find('.empty-field').length) {
            $.fancybox.open({
                type: 'ajax',
                src: '_modal-success.html'
            })
        }


    })

    $(document).on('click', '[data-edit-name]', function (event) {
        var name = $(this).data('edit-name')
        $('[data-edit-name=' + name + ']').toggleClass('open')
    })

    //тип заявки
    $(document).on('change', '#change-type-order select', function (event) {
        $('.form__tabitem').removeClass('open')
        $('#order-select-' + $(this).val() + '').addClass('open')
    })

    $(document).on('click', '.form__add a', function (event) {
        event.preventDefault();

        var form = $('.form__list-item');
        // не более 3х контактов
        if (form.length < 4) {

            //добавляем новый элемент
            form.last().after(function () {
                return form.first().clone();
            });

            //присваиваем уникальный name
            $('.form__list-item').each(function (index, elem) {

                if (index) {
                    var $containerIndex = index;
                    var $conatiner = $(this).find('select').not('.change');

                    $(this).find('.form__label').hide()
                    $(this).find('.form__subitem').not('.change').append('<div class=""><a href="#" class="remove-item" ></a></div>').addClass('change');

                    $conatiner.each(function (index, elem) {
                        $(this).attr('name', $(this).attr('name') + '_' + $containerIndex).addClass('change')
                    })
                }

            });

        } else {
            $('.form__add').hide()
        }


    });

    $(document).on('click', '.form__add2 a', function (event) {
        event.preventDefault();

        var form = $('.form__list-item2');
        // не более 3х контактов
        if (form.length < 4) {

            //добавляем новый элемент
            form.last().after(function () {
                return form.first().clone();
            });

            //присваиваем уникальный name
            $('.form__list-item2').each(function (index, elem) {

                if (index) {
                    var $containerIndex = index;
                    var $conatiner = $(this).find('input').not('.change');


                    $(this).find('.form__label').hide();
                    $(this).find('.form__subitem').not('.change').find('input').val('');
                    $(this).find('.form__subitem').not('.change').append('<div class=""><a href="#" class="remove-item" ></a></div>').addClass('change');

                    $conatiner.each(function (index, elem) {
                        $(this).attr('name', $(this).attr('name') + '_' + $containerIndex).addClass('change')
                    })
                }

            });

        } else {
            $('.form__add2').hide()
        }


    });

    //delete
    $(document).on('click', '.remove-item', function (event) {
        $(this).parents('.form__list-item').remove()
        $(this).parents('.form__list-item2').remove()
        $('.form__add').show()
        $('.form__add2').show()
        event.preventDefault()
    })



    /* 
    =====================================================
    select in map
    =====================================================
    */

    function selectInMap() {

        const mapsParamsSelect = [{
            'pin': [55.74481370529173, 37.67514980332959],
            'url': '/_balloon-add-parking-8.html',
            'icon': '/img/svg/ic_pin-parking.svg'
        }];

        ymaps.ready(function () {

           try {

                // Создание экземпляра карты и его привязка к созданному контейнеру.
                var myMapSelect = new ymaps.Map('maps-container-select', {
                        center: mapsParamsSelect[0].pin,
                        zoom: 12,
                        controls: []
                    }, {
                        suppressMapOpenBlock: true,
                    });


                var PlacemarkArr = [];

                if ($(window).width() <= 580) {

                    var showBaloonMode = false;
                    var ballonPane = 'balloon';
                    var ballonMapArea = 'Infinity';
                } else {
                    var showBaloonMode = false;
                    var ballonPane = 'placemark';
                    var ballonMapArea = 0;

                }

                // Создание метки с пользовательским макетом балуна.
                selectPlacemark = window.selectPlacemark = new ymaps.Placemark([55.74481370529173, 37.67514980332959], {
                    balloonContent: ''
                }, {

                    openBalloonOnClick: false,
                    balloonShadow: false,
                    balloonPanelMaxMapArea: ballonMapArea,
                    hideIconOnBalloonOpen: showBaloonMode,
                    balloonOffset: [15, -18],
                    iconLayout: 'default#image',
                    iconImageHref: mapsParamsSelect[0].icon,
                    iconImageSize: [53, 55],
                    pane: 'balloon',
                    draggable: false
                });

                selectPlacemark.events.add('click', function (e) {

                    var cord = e.get('target').geometry.getCoordinates();
                    $('#address-in-map input').val(cord);

                    $.fancybox.close()

                });


                myMapSelect.geoObjects.add(selectPlacemark);

                //центрируем метку

                myMapSelect.events.add('actiontick', function (e) {
                    var current_state = myMapSelect.action.getCurrentState();
                    var geoCenter = myMapSelect.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
                    selectPlacemark.geometry.setCoordinates(geoCenter);
                });

                myMapSelect.events.add('boundschange', function (e) {
                    var current_state = myMapSelect.action.getCurrentState();
                    var geoCenter = myMapSelect.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
                    selectPlacemark.geometry.setCoordinates(geoCenter);
                });

                //autoscale
                //myMapSelect.setBounds(myMapSelect.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 });


            } catch {
                console.log('error: maps-container select')
            }


        });
    }

    function selectLocationMap() {

        const mapsParamsSelect = [{
            'pin': [55.74481370529173, 37.67514980332959],
            'url': '/_balloon-add-parking-8.html',
            'icon': '/img/svg/ic_pin-parking.svg'
        }];
        
        ymaps.ready(function () {

            try {

                if ($(window).width() <= 580) {
                    var zoon = 15;
                } else {
                    var zoon = 16;
                }

                ymaps.ready(function () {
                    var myMap = new ymaps.Map('maps-container-select', {
                            center: [55.74481370529173, 37.67514980332959],
                            zoom: zoon,
                            controls: []
                        }, {
                            searchControlProvider: 'yandex#search'
                        }),

                        // Создаём макет содержимого.
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                        ),

                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: '',
                            balloonContent: 'Это красивая метка'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            openBalloonOnClick: false,
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '/img/svg/ic_pin-parking.svg',
                            // Размеры метки.
                            iconImageSize: [54, 56],
                            draggable: false,
                            iconImageOffset: [-27, -28]
                        }),


                        circle = new ymaps.Circle([
                            [55.74481370529173, 37.67514980332959], 300
                        ], {

                        }, {
                            fillColor: "rgba(226,36,60,0.1)",
                            strokeColor: "#E2243C",
                            strokeOpacity: 0.8,
                            strokeWidth: 3,
                            draggable: false,
                        });

                    myPlacemark.events.add('click', function (e) {

                        var cord = e.get('target').geometry.getCoordinates();
                        $('.required-address input').val(cord);

                        $.fancybox.close()
                        $('.required-address').removeClass('required-address')

                    });

                    myMap.geoObjects
                        .add(myPlacemark)
                        .add(circle);

                    myMap.events.add('actiontick', function (e) {
                        var current_state = myMap.action.getCurrentState();
                        var geoCenter = myMap.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
                        myPlacemark.geometry.setCoordinates(geoCenter);
                        circle.geometry.setCoordinates(geoCenter);
                    });

                    myMapSelect.events.add('boundschange', function (e) {
                        var current_state = myMapSelect.action.getCurrentState();
                        var geoCenter = myMapSelect.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
                        selectPlacemark.geometry.setCoordinates(geoCenter);
                        circle.geometry.setCoordinates(geoCenter);

                    });
                });
                //myMapSelect.setBounds(myMapSelect.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 });


            } catch {
                console.log('error: maps-container select')
            }


        });
    }

    $(document).on('click', '[data-select-inmap]', function (event) {


        $.fancybox.open({
            src: '<div id="maps-container-select" ></div>',
            type: 'inline',
            opts: {
                touch: false,
                afterShow: function (instance, current) {
                    selectInMap()
                }
            }
        })

    })

    $(document).on('click', '.input-primary.input-icon a', function (event) {

        $(this).parent().addClass('required-address')


        $.fancybox.open({
            src: '<div id="maps-container-select" ></div>',
            type: 'inline',
            opts: {
                touch: false,
                afterShow: function (instance, current) {
                    selectLocationMap()
                }
            }
        })

    })

    
    $('[data-fancybox]').fancybox({
        afterShow : function( instance, current ) {

            
        
        }
    });

    $(document).on('focus', "#address-in-map input", function(){
        $(this).suggestions({
            token: "16606eb95053d3dd45c2d750025a934774edaf58",
            type: "ADDRESS",
            /* Вызывается, когда пользователь выбирает одну из подсказок */
            onSelect: function(suggestion) {
                console.log(suggestion);
            }
        });
    })

    

     

    //alert('ee')

    /* выбор  */
})