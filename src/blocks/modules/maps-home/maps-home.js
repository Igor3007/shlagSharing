ymaps.ready(function () {

    try {

        var icon = '/img/svg/ic_pin-offer.svg';

        // Создание экземпляра карты и его привязка к созданному контейнеру.
        var myMap = new ymaps.Map('maps-home', {
                center: [55.751574, 37.573856],
                zoom: 12,
                controls: []
            }, {
                suppressMapOpenBlock: true,
            }),

            // Создание макета балуна на основе Twitter Bootstrap.
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(

                '<div class="sh-balloon" >' +
                '<div class="sh-balloon__close" >+</div>' +
                '<div class="sh-balloon__content" >$[[options.contentLayout observeSize class=sh-wrp minWidth=235 maxWidth=550 maxHeight=400]]</div>' +
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

                        this._$element = $('.sh-balloon', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.sh-balloon__close')
                            .on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function () {
                        this._$element.find('.sh-balloon__close')
                            .off('click');

                            

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

                        if (!this._isElement(this._$element)) {
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
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + this._$element.find('.sh-balloon__arrow')[0].offsetHeight)
                        }

                        if($(window).width() <= 580 ){

                           var positionDefault = {
                               left: 0,
                               right: 0,
                               bottom: 0
                           }
                        }

                        this._$element.css(positionDefault);
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
                        if (!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();
                        pos1 = [position.left, position.top]
                        pos2 = [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + this._$element.find('.sh-balloon__arrow')[0].offsetHeight
                        ]

                        if($(window).width() <= 580 ){

                            var heightElem = this._$element.height() + 55
                            var widthElem = (this._$element.width() / 2) - 25

                            pos1 = [0, 0]
                            pos2 = [widthElem, heightElem]
                        }


                        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([ pos1, pos2 ]));
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

            // // Создание вложенного макета содержимого балуна.
            // MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            //     '<div>$[properties.balloonContent]</div>'
            // );

        var coordinates = [{
                'pin': [55.74481370529173, 37.67514980332959],
                'url': '/_balloon-map-parking.html',
                'icon': '/img/svg/ic_pin-parking.svg'
            },
            {
                'pin': [55.74142447125276, 37.59343898789991],
                'url': '/_balloon-map-offer.html',
                'icon': '/img/svg/ic_pin-offer.svg'
            },
            {
                'pin': [55.785141099836416, 37.61463455491718],
                'url': '/_balloon-map-swap.html',
                'icon': '/img/svg/ic_pin-swap.svg'
            },

        ];

        var PlacemarkArr = [];

        if($(window).width() <= 580 ){

            var showBaloonMode = false;
            var ballonPane = 'balloon';
            var ballonMapArea = 'Infinity';
        }else{
            var showBaloonMode = false;
            var ballonPane = 'placemark';
            var ballonMapArea = 0;

        }


        for (let i = 0; i < coordinates.length; i++) {

            // Создание метки с пользовательским макетом балуна.
            PlacemarkArr[i] = window.myPlacemark = new ymaps.Placemark(coordinates[i].pin, {
                balloonContent: ''
            }, {
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                //balloonContentLayout: MyBalloonContentLayout,
                balloonPanelLayout: MyBalloonLayout,
                //balloonPanelContentLayout: MyBalloonContentLayout,
                balloonPanelMaxMapArea: ballonMapArea,
                // Не скрываем иконку при открытом балуне.
                hideIconOnBalloonOpen: showBaloonMode,
                // И дополнительно смещаем балун, для открытия над иконкой.
                balloonOffset: [15, -18],

                // balloonContentLayout: LayoutActivatePoint,
                iconLayout: 'default#image',
                iconImageHref: coordinates[i].icon,
                iconImageSize: [53, 55],
                pane: 'balloon'
            });

            PlacemarkArr[i].events.add('balloonopen', function (e) {
                PlacemarkArr[i].properties.set('balloonContent', "<span class='baloon-loading' ></span>");

                $('.maps-home-button__find').fadeOut(300)
                $('.maps-home-button__add').fadeOut(300)

                const url = coordinates[i].url;

                $.ajax({
                    method: 'GET',
                    url: url,
                    dataType: 'html',
                    success: function (response) {
                        PlacemarkArr[i].properties.set('balloonContent', response);
                    },
                    error: function () {
                        PlacemarkArr[i].properties.set('balloonContent', 'что-то пошло не так');
                    }
                })

            });

            PlacemarkArr[i].events.add('balloonclose', function (e) {
                $('.maps-home-button__find').fadeIn(300)
                $('.maps-home-button__add').fadeIn(300)
            })

            myMap.geoObjects.add(PlacemarkArr[i]);
            //autoscale
            myMap.setBounds(myMap.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 });

        }

    } catch {
        console.log('error: maps-home')
    }


});