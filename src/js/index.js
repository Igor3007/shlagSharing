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
    })

    //закрыть при клике вне
    $(document).on('click', function (e) {
        var div = $(".burger, .personal-layout__aside"); //класс элемента вне которого клик
        if (!div.is(e.target) && div.has(e.target).length === 0) {
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
                    }),

                    // Создание макета балуна на основе Twitter Bootstrap.
                    MyBalloonLayout = ymaps.templateLayoutFactory.createClass(

                        '<div class="sh-balloon" >' +
                        '<div class="sh-balloon__close" >+</div>' +
                        '<div class="sh-balloon__content" >$[[options.contentLayout observeSize class=sh-wrp minWidth=235 maxWidth=480 maxHeight=400]]</div>' +
                        '<div class="sh-balloon__arrow" >!</div>' +
                        '</div>', {
                            /**
                             * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                             * @function
                             * @name build
                             */
                            build: function () {
                                this.constructor.superclass.build.call(this);
                                this._$elementCenter = $('.sh-balloon', this.getParentElement());
                                this.applyElementOffset();
                                this._$elementCenter.find('.sh-balloon__close')
                                    .on('click', $.proxy(this.onCloseClick, this));
                            },

                            /**
                             * Удаляет содержимое макета из DOM.
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                             * @function
                             * @name clear
                             */
                            clear: function () {
                                this._$elementCenter.find('.sh-balloon__close') .off('click');
                                this.constructor.superclass.clear.call(this);
                            },

                            /**
                             * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                             * @function
                             * @name onSublayoutSizeChange
                             */
                            onSublayoutSizeChange: function () {
                                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                                if (!this._isElement(this._$elementCenter)) {
                                    return;
                                }

                                this.applyElementOffset();
                                this.events.fire('shapechange');
                            },

                            /**
                             * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                             * @function
                             * @name applyElementOffset
                             */
                            applyElementOffset: function () {

                                var positionDefault = {
                                    left: -(this._$elementCenter[0].offsetWidth / 2),
                                    top: -(this._$elementCenter[0].offsetHeight + this._$elementCenter.find('.sh-balloon__arrow')[0].offsetHeight)
                                }

                                if ($(window).width() <= 580) {

                                    var positionDefault = {
                                        left: 0,
                                        right: 0,
                                        bottom: 0
                                    }
                                }

                                this._$elementCenter.css(positionDefault);
                            },

                            /**
                             * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                             * @function
                             * @name onCloseClick
                             */
                            onCloseClick: function (e) {
                                e.preventDefault();

                                this.events.fire('userclose');
                            },

                            /**
                             * Используется для автопозиционирования (balloonAutoPan).
                             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                             * @function
                             * @name getClientBounds
                             * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                             */
                            getShape: function () {
                                if (!this._isElement(this._$elementCenter)) {
                                    return MyBalloonLayout.superclass.getShape.call(this);
                                }

                                var position = this._$elementCenter.position();
                                pos1 = [position.left, position.top]
                                pos2 = [
                                    position.left + this._$elementCenter[0].offsetWidth,
                                    position.top + this._$elementCenter[0].offsetHeight + this._$elementCenter.find('.sh-balloon__arrow')[0].offsetHeight
                                ]

                                if ($(window).width() <= 580) {

                                    var heightElem = this._$elementCenter.height() + 55
                                    var widthElem = (this._$elementCenter.width() / 2) - 25

                                    pos1 = [0, 0]
                                    pos2 = [widthElem, heightElem]
                                }


                                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([pos1, pos2]));
                            },

                            /**
                             * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                             * @function
                             * @private
                             * @name _isElement
                             * @param {jQuery} [element] Элемент.
                             * @returns {Boolean} Флаг наличия.
                             */
                            _isElement: function (element) {
                                return element && element[0] && element.find('.sh-balloon__arrow')[0];
                            }
                        });

                // Создание вложенного макета содержимого балуна.
                MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="bln-scroll-offset" >$[properties.balloonContent]</div>'
                );


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
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelLayout: MyBalloonLayout,
                    //balloonPanelContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: ballonMapArea,
                    // Не скрываем иконку при открытом балуне.
                    hideIconOnBalloonOpen: showBaloonMode,
                    // И дополнительно смещаем балун, для открытия над иконкой.
                    balloonOffset: [15, -18],

                    // balloonContentLayout: LayoutActivatePoint,
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
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                        ),

                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: '',
                            balloonContent: 'Это красивая метка'
                        }, {
                            openBalloonOnClick: false,
                            iconLayout: 'default#image',
                            iconImageHref: '/img/svg/ic_pin-parking.svg',
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

    $(document).on('click', '.input-primary.input-icon svg', function (event) {

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

    /* выбор  */
})