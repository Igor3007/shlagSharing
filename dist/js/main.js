/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/form/form.js":
/*!********************************************!*\
  !*** ./src/blocks/components/form/form.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function passValidateRules(pass) {
    this.value = pass;

    this.validatePasswordEnNum = function (pass) {
      var regexp = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+)).*';
      return this.value.match(regexp) ? true : false;
    };

    this.validatePasswordRus = function (pass) {
      var regexp = '(?=.*[А-яЁё])';
      return this.value.match(regexp) ? true : false;
    };

    this.validatePasswordOneNum = function (pass) {
      var regexp = '(?=.*[0-9])';
      return this.value.match(regexp) ? true : false;
    };

    this.validatePasswordCap = function (pass) {
      // debugger
      var regexp = '((?=.*\d)|(?=.*\W+)).*';
      return this.value.match(regexp) ? true : false;
    };
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', 'input[type=text], input[type=email], input[type=password], textarea', function () {
    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

    switch (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type')) {
      case 'email':
        if (!validateEmail(value)) {
          elem.attr('area-valid', 'false'); //elem.parent().find('.tooltip').text('Не корректный Email')
        } else {
          elem.attr('area-valid', 'true');
          elem.parents('.input-primary').removeClass('empty-field');
        }

        break;

      case 'password':
        var validState = new passValidateRules(value);
        var rulesList = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('form').find('.valid-rules li');

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul').is('.valid-rules')) {
          if (validState.validatePasswordEnNum()) {
            rulesList.eq(0).addClass('active');
          } else {
            rulesList.eq(0).removeClass('active');
          }

          if (validState.validatePasswordRus()) {
            rulesList.eq(0).removeClass('active');
          }

          if (validState.validatePasswordOneNum()) {
            rulesList.eq(1).addClass('active');
          } else {
            rulesList.eq(1).removeClass('active');
          }

          if (validState.validatePasswordCap()) {
            rulesList.eq(2).addClass('active');
          } else {
            rulesList.eq(2).removeClass('active');
          }
        }

        break;

      case 'text':
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul').is('.valid-rules')) {
          var _validState = new passValidateRules(value);

          var _rulesList = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('form').find('.valid-rules li');

          if (_validState.validatePasswordEnNum()) {
            _rulesList.eq(0).addClass('active');
          } else {
            _rulesList.eq(0).removeClass('active');
          }

          if (_validState.validatePasswordRus()) {
            _rulesList.eq(0).removeClass('active');
          }

          if (_validState.validatePasswordOneNum()) {
            _rulesList.eq(1).addClass('active');
          } else {
            _rulesList.eq(1).removeClass('active');
          }

          if (_validState.validatePasswordCap()) {
            _rulesList.eq(2).addClass('active');
          } else {
            _rulesList.eq(2).removeClass('active');
          }
        }

        switch (elem.data('valid-type')) {
          case 'min8':
            if (value.length < 8) {
              elem.attr('area-valid', 'false');
            } else {
              elem.attr('area-valid', 'true');
              elem.parents('.input-primary').removeClass('empty-field');
            }

            break;

          case 'number':
            elem.val(value.replace(/\D/, ''));
            break;

          default:
            if (value.length < 0) {
              elem.attr('area-valid', 'false');
            } else {
              elem.attr('area-valid', 'true');
              elem.parents('.input-primary').removeClass('empty-field');
            }

        }

        break;

      default:
        if (value.length < 0) {
          elem.attr('area-valid', 'false');
        } else {
          elem.attr('area-valid', 'true');
        }

    }

    if (!value) {
      elem.removeAttr('area-valid');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.input-material input, .input-primary input').each(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('area-valid', '');
    }
  }); //upload files

  function sendFiles(files, callback) {
    for (var i = 0; i < files.length; i++) {
      var file = files.item(i);

      if (file.size > 2200000) {
        alert('Не больше 2 мб');
        return false;
      }

      callback(file);
    }
  }
  /* Прикрепить файл резюме */


  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '[for=attach-file] > input', function () {
    var files = this.files;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    sendFiles(files, function (data) {
      elem.parents('.form__item').find('.upload-files').append('<li>' + data.name + '</li>');
    });
  });
  /* input-attach */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.input-attach input', function () {
    var files = this.files;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    sendFiles(files, function (data) {
      elem.parent().find('.file-name').text(data.name);
    });
  });
  /* input-photo */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '#upload-photo', function () {
    var files = this.files;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    sendFiles(files, function (data) {
      var reader = new FileReader();
      reader.readAsDataURL(data);

      reader.onload = function (e) {
        elem.parent().find('.upload-image').css({
          'background-image': 'url(' + e.target.result + ')'
        });
      };
    });
  }); //showpass

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.tooltip-showpass', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().children('input').attr('type') == 'text') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().children('input').attr('type', 'password');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().children('input').attr('type', 'text');
    }
  }); // $(document).on('mouseup', function(event){
  //     $('.tooltip-showpass').parent().children('input').attr('type', 'password')
  // })
});

/***/ }),

/***/ "./src/blocks/components/tabs/tabs.js":
/*!********************************************!*\
  !*** ./src/blocks/components/tabs/tabs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Start tabs.js
(function () {
  'use strict';
  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */

  var tabs = function tabs(options) {
    if (document.querySelector(options.el)) {
      var el = document.querySelector(options.el);
      var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
      var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
      var activeIndex = 0;
      var initCalled = false;
    } else {
      return false;
    }
    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */


    var init = function init() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };
    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */


    var handleClick = function handleClick(link, index) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        goToTab(index);
      });
    };
    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */


    var goToTab = function goToTab(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('active');
        tabNavigationLinks[index].classList.add('active');
        tabContentContainers[activeIndex].classList.remove('active');
        tabContentContainers[index].classList.add('active');
        activeIndex = index;
      }
    };
    /**
     * Returns init and goToTab
     */


    return {
      init: init,
      goToTab: goToTab
    };
  };
  /**
   * Attach to global namespace
   */


  window.tabs = tabs;
})(); // End tabs.js

/***/ }),

/***/ "./src/blocks/modules/maps-container/maps-container.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/maps-container/maps-container.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {ymaps.ready(function () {
  try {
    var icon = '/img/svg/ic_pin-offer.svg'; // Создание экземпляра карты и его привязка к созданному контейнеру.

    var myMap = new ymaps.Map('maps-container', {
      center: [55.751574, 37.573856],
      zoom: 12,
      controls: []
    }, {
      suppressMapOpenBlock: true
    }),
        // Создание макета балуна на основе Twitter Bootstrap.
    MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="sh-balloon" >' + '<div class="sh-balloon__close" >+</div>' + '<div class="sh-balloon__content" >$[[options.contentLayout observeSize class=sh-wrp minWidth=235 maxWidth=480 maxHeight=400]]</div>' + '<div class="sh-balloon__arrow" >!</div>' + '</div>', {
      /**
       * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
       * @function
       * @name build
       */
      build: function build() {
        this.constructor.superclass.build.call(this);
        this._$element = $('.sh-balloon', this.getParentElement());
        this.applyElementOffset();

        this._$element.find('.sh-balloon__close').on('click', $.proxy(this.onCloseClick, this));
      },

      /**
       * Удаляет содержимое макета из DOM.
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
       * @function
       * @name clear
       */
      clear: function clear() {
        this._$element.find('.sh-balloon__close').off('click');

        this.constructor.superclass.clear.call(this);
      },

      /**
       * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
       * @function
       * @name onSublayoutSizeChange
       */
      onSublayoutSizeChange: function onSublayoutSizeChange() {
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
      applyElementOffset: function applyElementOffset() {
        var positionDefault = {
          left: -(this._$element[0].offsetWidth / 2),
          top: -(this._$element[0].offsetHeight + this._$element.find('.sh-balloon__arrow')[0].offsetHeight)
        };

        if ($(window).width() <= 580) {
          var positionDefault = {
            left: 0,
            right: 0,
            bottom: 0
          };
        }

        this._$element.css(positionDefault);
      },

      /**
       * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
       * @function
       * @name onCloseClick
       */
      onCloseClick: function onCloseClick(e) {
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
      getShape: function getShape() {
        if (!this._isElement(this._$element)) {
          return MyBalloonLayout.superclass.getShape.call(this);
        }

        var position = this._$element.position();

        pos1 = [position.left, position.top];
        pos2 = [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.sh-balloon__arrow')[0].offsetHeight];

        if ($(window).width() <= 580) {
          var heightElem = this._$element.height() + 55;
          var widthElem = this._$element.width() / 2 - 25;
          pos1 = [0, 0];
          pos2 = [widthElem, heightElem];
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
      _isElement: function _isElement(element) {
        return element && element[0] && element.find('.sh-balloon__arrow')[0];
      }
    }); // Создание вложенного макета содержимого балуна.

    MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<div class="bln-scroll-offset" >$[properties.balloonContent]</div>');
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

    var _loop = function _loop(i) {
      // Создание метки с пользовательским макетом балуна.
      PlacemarkArr[i] = window.myPlacemark = new ymaps.Placemark(mapsParams[i].pin, {
        balloonContent: ''
      }, {
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
        iconImageHref: mapsParams[i].icon,
        iconImageSize: [53, 55],
        pane: 'balloon',
        draggable: mapsParams[i].draggable ? true : false
      });
      PlacemarkArr[i].events.add('balloonopen', function (e) {
        PlacemarkArr[i].properties.set('balloonContent', "<span class='baloon-loading' ></span>");
        $('.maps-home-button__bottom-bar').fadeOut(300);
        $('.maps-home-button__top-bar').fadeOut(300);
        var url = mapsParams[i].url;
        $.ajax({
          method: 'GET',
          url: url,
          dataType: 'html',
          success: function success(response) {
            PlacemarkArr[i].properties.set('balloonContent', response);
          },
          error: function error() {
            PlacemarkArr[i].properties.set('balloonContent', 'что-то пошло не так');
          }
        });
      });
      PlacemarkArr[i].events.add('balloonclose', function (e) {
        $('.maps-home-button__bottom-bar').fadeIn(300);
        $('.maps-home-button__top-bar').fadeIn(300);
      });
      myMap.geoObjects.add(PlacemarkArr[i]); //autoscale

      myMap.setBounds(myMap.geoObjects.getBounds(), {
        checkZoomRange: true,
        zoomMargin: 15
      });
    };

    for (var i = 0; i < mapsParams.length; i++) {
      _loop(i);
    }
  } catch (_unused) {
    console.log('error: maps-container');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/tabs/tabs */ "./src/blocks/components/tabs/tabs.js");
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/form/form */ "./src/blocks/components/form/form.js");
/* harmony import */ var _modules_maps_container_maps_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/maps-container/maps-container */ "./src/blocks/modules/maps-container/maps-container.js");
/* harmony import */ var _modules_maps_container_maps_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_maps_container_maps_container__WEBPACK_IMPORTED_MODULE_2__);


 // import "%modules%/maps-home/maps-home";
// import "%modules%/maps-add-parking/maps-add-parking";

/***/ }),

/***/ "./src/js/import/jquery.fancybox.min.js":
/*!**********************************************!*\
  !*** ./src/js/import/jquery.fancybox.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o,
        i,
        a,
        s = [],
        r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
  }

  if (t.console = t.console || {
    info: function info(t) {}
  }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");

    var a = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: {
        preload: !1
      },
      ajax: {
        settings: {
          data: {
            fancybox: !0
          }
        }
      },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: {
          scrolling: "auto"
        }
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
        format: "",
        autoStart: !0
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
      },
      parentEl: "body",
      hideScrollbar: !0,
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: {
        autoStart: !1
      },
      touch: {
        vertical: !0,
        momentum: !0
      },
      hash: null,
      media: {},
      slideShow: {
        autoStart: !1,
        speed: 3e3
      },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y"
      },
      wheel: "auto",
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function clickContent(t, e) {
        return "image" === t.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        preventCaptionOverlap: !1,
        idleTime: !1,
        clickContent: function clickContent(t, e) {
          return "image" === t.type && "toggleControls";
        },
        clickSlide: function clickSlide(t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        },
        dblclickContent: function dblclickContent(t, e) {
          return "image" === t.type && "zoom";
        },
        dblclickSlide: function dblclickSlide(t, e) {
          return "image" === t.type && "zoom";
        }
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern"
        }
      }
    },
        s = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
        f = function () {
      var t,
          n = e.createElement("fakeelement"),
          o = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }

      return "transitionend";
    }(),
        p = function p(t) {
      return t && t.length && t[0].offsetHeight;
    },
        h = function h(t, e) {
      var o = n.extend(!0, {}, t, e);
      return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        g = function g(t) {
      var o, i;
      return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
        x: t.getBoundingClientRect().left + t.offsetWidth / 2,
        y: t.getBoundingClientRect().top + t.offsetHeight / 2
      }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i);
    },
        b = function b(t, e, o) {
      var i = this;
      i.opts = h({
        index: o
      }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init();
    };

    n.extend(b.prototype, {
      init: function init() {
        var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;
        r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || "";
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
          container: o
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t);
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
      },
      translate: function translate(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function addContent(t) {
        var e,
            o = this,
            i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};
          n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
            type: "html",
            src: e + ""
          }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
            contentType: "pdf",
            opts: {
              iframe: {
                preload: !1
              }
            }
          })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), o.group.push(l);
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function addEvents() {
        var e = this;
        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
          if (9 == a) return void (i.opts.trapFocus && e.focus(t));
          if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      },
      removeEvents: function removeEvents() {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      },
      previous: function previous(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function next(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function jumpTo(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;

        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
          if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
          c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });
            var i = o.pos * c.width + o.pos * o.opts.gutter;
            n.fancybox.setTranslate(o.$slide, {
              top: 0,
              left: i - l.left + u
            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
              top: 0,
              left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
            }, e, function () {
              o.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
            });
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
        }
      },
      createSlide: function createSlide(t) {
        var e,
            o,
            i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t];
      },
      scaleToActual: function scaleToActual(t, e, o) {
        var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;
        l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
          top: s,
          left: a,
          scaleX: r,
          scaleY: c
        }, o || 366, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function scaleToFit(t) {
        var e,
            o = this,
            i = o.current,
            a = i.$content;
        o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 366, function () {
          o.isAnimating = !1;
        }));
      },
      getFitPos: function getFitPos(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
      },
      update: function update(t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function updateSlide(t, e) {
        var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
        o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      },
      centerSlide: function centerSlide(t) {
        var e = this,
            o = e.current,
            i = o.$slide;
        !e.isClosing && o && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, void 0 === t ? 0 : t, function () {
          i.css({
            transform: "",
            opacity: ""
          }), o.isComplete || e.complete();
        }, !1));
      },
      isMoved: function isMoved(t) {
        var e,
            o,
            i = t || this.current;
        return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      },
      updateCursor: function updateCursor(t, e) {
        var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;
        s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function isZoomable() {
        var t,
            e = this,
            n = e.current;

        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
        }

        return !1;
      },
      isScaledDown: function isScaledDown(t, e) {
        var o = this,
            i = !1,
            a = o.current,
            s = a.$content;
        return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i;
      },
      canPan: function canPan(t, e) {
        var o = this,
            i = o.current,
            a = null,
            s = !1;
        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
          width: t,
          height: e
        } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s;
      },
      loadSlide: function loadSlide(t) {
        var e,
            o,
            i,
            a = this;

        if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;

          switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case "image":
              a.setImage(t);
              break;

            case "iframe":
              a.setIframe(t);
              break;

            case "html":
              a.setContent(t, t.src || t.content);
              break;

            case "video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
              break;

            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;

            case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function success(e, n) {
                  "success" === n && a.setContent(t, e);
                },
                error: function error(e, n) {
                  e && "abort" !== n && a.setError(t);
                }
              })), o.one("onReset", function () {
                i.abort();
              });
              break;

            default:
              a.setError(t);
          }

          return !0;
        }
      },
      setImage: function setImage(t) {
        var o,
            i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          i.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t);
      },
      checkSrcset: function checkSrcset(e) {
        var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;

        if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              if (0 === n) return e.url = t;
              o && (e.value = o, e.postfix = t[t.length - 1]);
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });

          for (var r = 0; r < o.length; r++) {
            var c = o[r];

            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;
              break;
            }
          }

          !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      },
      setBigImage: function setBigImage(t) {
        var o = this,
            i = e.createElement("img"),
            a = n(i);
        t.$image = a.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      },
      setIframe: function setIframe(t) {
        var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;
        t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
        }), a.on("refresh.fb", function () {
          var n,
              o,
              s = t.$content,
              r = i.css.width,
              c = i.css.height;

          if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body");
            } catch (t) {}

            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}

          n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      },
      setContent: function setContent(t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      },
      setError: function setError(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function showLoading(t) {
        var e = this;
        (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      },
      hideLoading: function hideLoading(t) {
        var e = this;
        (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function afterLoad(t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      },
      adjustCaption: function adjustCaption(t) {
        var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;
        s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function adjustLayout(t) {
        var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;
        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      },
      revealContent: function revealContent(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;
        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete();
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({
            transform: "",
            opacity: ""
          }), t.pos === s.currPos && s.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
      },
      getThumbPos: function getThumbPos(t) {
        var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;
        return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
          top: e.top + o,
          left: e.left + s,
          width: e.width - i - s,
          height: e.height - o - a,
          scaleX: 1,
          scaleY: 1
        }, e.width > 0 && e.height > 0 && r);
      },
      complete: function complete() {
        var t,
            e = this,
            o = e.current,
            i = {};
        !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function preload(t) {
        var e,
            n,
            o = this;
        o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      },
      focus: function focus(t, o) {
        var i,
            a,
            s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      },
      activate: function activate() {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function close(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function h() {
          u.cleanUp(t);
        };

        return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)));
      },
      cleanUp: function cleanUp(e) {
        var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      },
      trigger: function trigger(t, e) {
        var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;
        if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
        "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
      },
      updateControls: function updateControls() {
        var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
        o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      },
      hideControls: function hideControls(t) {
        var e = this,
            n = ["infobar", "toolbar", "nav"];
        !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      },
      showControls: function showControls() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      }
    }), n.fancybox = {
      version: "3.5.7",
      defaults: a,
      getInstance: function getInstance(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
        return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      },
      open: function open(t, e, n) {
        return new b(t, e, n);
      },
      close: function close(t) {
        var e = this.getInstance();
        e && (e.close(), !0 === t && this.close(t));
      },
      destroy: function destroy() {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(),
      getTranslate: function getTranslate(t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        });
      },
      setTranslate: function setTranslate(t, e) {
        var n = "",
            o = {};
        if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o);
      },
      animate: function animate(t, e, o, i, a) {
        var s,
            r = this;
        n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
            top: e.top,
            left: e.left,
            width: s.width * e.scaleX,
            height: s.height * e.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, o + 33));
      },
      stop: function stop(t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
        $trigger: n(this)
      });
    }), function () {
      var t = null;
      r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {
          case "mousedown":
            t = n(this);
            break;

          case "mouseup":
            t = null;
            break;

          case "focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
            break;

          case "focusout":
            n(".fancybox-button").removeClass("fancybox-focus");
        }
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";

  var e = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  },
      n = function n(e, _n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(_n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  };

  t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;
    s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");

          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }

        return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType);
  });
  var o = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function load(t) {
      var e,
          n = this;
      if (this[t].loaded) return void setTimeout(function () {
        n.done(t);
      });
      this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e));
    },
    done: function done(e) {
      var n, o, i;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function onStateChange(t) {
            0 == t.data && n.next();
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next();
      })));
    }
  };
  t(document).on({
    "afterShow.fb": function afterShowFb(t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    }
  });
}(jQuery), function (t, e, n) {
  "use strict";

  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      a = function a(e) {
    var n = [];
    e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var o in e) {
      e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
    }

    return n;
  },
      s = function s(t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function r(t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;

    for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) {
      if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    }

    return !1;
  },
      c = function c(e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
    return i || a;
  },
      l = function l(t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;
      if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }

    return e;
  },
      d = function d(t) {
    var e = this;
    e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };

  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
        c = n(o.target),
        d = i.instance,
        u = d.current,
        f = u.$slide,
        p = u.$content,
        h = "touchstart" == o.type;

    if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
        top: 0,
        left: 0
      }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
        s = this,
        r = s.instance,
        c = s.isSwiping,
        l = s.sliderStartPos.left || 0;
    if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - i.top,
          left: o.left - i.left
        });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;
    if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
    t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    });
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        i,
        a,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
        a = i.canvasWidth,
        s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    };
  }, d.prototype.onZoom = function () {
    var e = this,
        a = e.contentStartPos,
        r = a.width,
        c = a.height,
        l = a.left,
        d = a.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        y = m - e.centerPointStartX,
        x = v - e.centerPointStartY,
        w = l + (g + y),
        $ = d + (b + x),
        S = {
      top: $,
      left: w,
      scaleX: f,
      scaleY: f
    };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = o.isSwiping,
        r = o.isPanning,
        c = o.isZooming,
        l = o.isScrolling;
    if (o.endPoints = a(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
    o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        i = !1,
        a = o.instance.group.length,
        s = Math.abs(o.distanceX),
        r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        i = this;
    i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        i,
        a = this,
        s = a.instance.current,
        r = a.newWidth,
        c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        i = this,
        s = n(e.target),
        r = i.instance,
        c = r.current,
        l = e && a(e) || i.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
        f = function f(t) {
      var o = c.opts[t];
      if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
        case "close":
          r.close(i.startEvent);
          break;

        case "toggleControls":
          r.toggleControls();
          break;

        case "next":
          r.next();
          break;

        case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(i.startEvent);
          break;

        case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));
      }
    };

    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content";
      }

      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);

      return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  });

  var n = function n(t) {
    this.instance = t, this.init();
  };

  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function init() {
      var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    },
    set: function set(t) {
      var n = this,
          o = n.instance,
          i = o.current;
      i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
        scaleX: 1
      }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    },
    clear: function clear() {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    },
    start: function start() {
      var t = this,
          e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    },
    stop: function stop() {
      var t = this,
          e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    },
    toggle: function toggle() {
      var t = this;
      t.isActive ? t.stop() : t.start();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    },
    "afterShow.fb": function afterShowFb(t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set();
    },
    "afterKeydown.fb": function afterKeydownFb(n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
      var n = e && e.SlideShow;
      n && n.stop();
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];

      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) {
          n[e[0][a]] = i[a];
        }

        return n;
      }
    }

    return !1;
  }();

  if (n) {
    var o = {
      request: function request(e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function exit() {
        t[n.exitFullscreen]();
      },
      toggle: function toggle(e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function isFullscreen() {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function enabled() {
        return Boolean(t[n.fullscreenEnabled]);
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }

  e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var i;
      if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = "fancybox-thumbs";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);

  var o = function o(t) {
    this.init(t);
  };

  e.extend(o.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function init(t) {
      var e = this,
          n = t.group,
          o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");

      for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) {
        ;
      }

      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    },
    create: function create() {
      var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
    },
    focus: function focus(t) {
      var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
      o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, t));
    },
    update: function update() {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    },
    hide: function hide() {
      this.isVisible = !1, this.update();
    },
    show: function show() {
      this.isVisible = !0, this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var n;
      e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250);
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function url(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        i = e.fancybox.getInstance(),
        a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function afterLoad(t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        },
        mobile: {
          autoFocus: !1
        }
      }
    }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1),
        n = e.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        i = n.join("-");
    return {
      hash: e,
      index: o < 1 ? 1 : o,
      gallery: i
    };
  }

  function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }

  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
  }

  n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    });
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({
      "onInit.fb": function onInitFb(t, e) {
        var n, i;
        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      },
      "beforeShow.fb": function beforeShowFb(n, o, i, s) {
        var r;
        i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300)));
      },
      "beforeClose.fb": function beforeCloseFb(n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(),
          e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");
        if (i && i.currentHash) return e = i, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  var n = new Date().getTime();
  e(t).on({
    "onInit.fb": function onInitFb(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            i = new Date().getTime();
        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/jquery.suggestions.min.js":
/*!*************************************************!*\
  !*** ./src/js/import/jquery.suggestions.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function t(e, t) {
    return function (n, i) {
      var s,
          o = [];
      return t(i) && (s = k.splitTokens(k.split(n, e)), m.each(i, function (t, i) {
        var r = t.value;
        if (k.stringEncloses(n, r)) return !1;
        var a = k.splitTokens(k.split(r, e));
        0 === m.minus(s, a).length && o.push(i);
      })), 1 === o.length ? o[0] : -1;
    };
  }

  function n(e, t) {
    var n = e.data && e.data[t];
    return n && new RegExp("^" + k.escapeRegExChars(n) + "([" + w + "]|$)", "i").test(e.value);
  }

  function i(e, t) {
    var n = /<strong>/;
    return n.test(t) && !n.test(e) ? t : e;
  }

  function s(e, t, n, s, o) {
    var r = this;
    return i(r.highlightMatches(e, n, s, o), r.highlightMatches(t, n, s, o));
  }

  function o(e) {
    this.urlSuffix = e.toLowerCase(), this.noSuggestionsHint = "Неизвестное значение", this.matchers = [F.matchByNormalizedQuery(), F.matchByWords()];
  }

  function r(t, n) {
    var i = this;
    i.element = t, i.el = e(t), i.suggestions = [], i.badQueries = [], i.selectedIndex = -1, i.currentValue = i.element.value, i.intervalId = 0, i.cachedResponse = {}, i.enrichmentCache = {}, i.currentRequest = null, i.inputPhase = e.Deferred(), i.fetchPhase = e.Deferred(), i.enrichPhase = e.Deferred(), i.onChangeTimeout = null, i.triggering = {}, i.$wrapper = null, i.options = e.extend({}, L, n), i.classes = x, i.disabled = !1, i.selection = null, i.$viewport = e(window), i.$body = e(document.body), i.type = null, i.status = {}, i.setupElement(), i.initializer = e.Deferred(), i.el.is(":visible") ? i.initializer.resolve() : i.deferInitialization(), i.initializer.done(e.proxy(i.initialize, i));
  }

  function a() {
    V.each(K, function (e) {
      e.abort();
    }), K = {};
  }

  function u() {
    J = null, L.geoLocation = X;
  }

  function l(t) {
    return e.map(t, function (e) {
      var t = V.escapeHtml(e.text);
      return t && e.matched && (t = "<strong>" + t + "</strong>"), t;
    }).join("");
  }

  function c(t, n) {
    var i = t.split(", ");
    return 1 === i.length ? t : e.map(i, function (e) {
      return '<span class="' + n + '">' + e + "</span>";
    }).join(", ");
  }

  function d(t, n) {
    var i = !1;
    return e.each(t, function (e, t) {
      if (i = t.value == n.value && t != n) return !1;
    }), i;
  }

  function f(e, t) {
    var n = t.selection,
        i = n && n.data && t.bounds;
    return i && m.each(t.bounds.all, function (t, s) {
      return i = n.data[t] === e.data[t];
    }), i;
  }

  function p(e) {
    var t = e.replace(/^(\d{2})(\d*?)(0+)$/g, "$1$2"),
        n = t.length,
        i = -1;
    return n <= 2 ? i = 2 : n > 2 && n <= 5 ? i = 5 : n > 5 && n <= 8 ? i = 8 : n > 8 && n <= 11 ? i = 11 : n > 11 && n <= 15 ? i = 15 : n > 15 && (i = 19), k.padEnd(t, i, "0");
  }

  function g(e) {
    this.plan = e.status.plan;
    var t = e.getContainer();
    this.element = de.selectByClass(x.promo, t);
  }

  function h() {
    new g(this).show();
  }

  e = e && e.hasOwnProperty("default") ? e.default : e;

  var y = {
    isArray: function isArray(e) {
      return Array.isArray(e);
    },
    isFunction: function isFunction(e) {
      return "[object Function]" === Object.prototype.toString.call(e);
    },
    isEmptyObject: function isEmptyObject(e) {
      return 0 === Object.keys(e).length && e.constructor === Object;
    },
    isPlainObject: function isPlainObject(e) {
      return void 0 !== e && "object" == _typeof(e) && null !== e && !e.nodeType && e !== e.window && !(e.constructor && !Object.prototype.hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf"));
    }
  },
      m = {
    compact: function compact(e) {
      return e.filter(function (e) {
        return !!e;
      });
    },
    each: function each(e, t) {
      if (Array.isArray(e)) return void e.some(function (e, n) {
        return !1 === t(e, n);
      });
      Object.keys(e).some(function (n) {
        var i = e[n];
        return !1 === t(i, n);
      });
    },
    intersect: function intersect(e, t) {
      var n = [];
      return Array.isArray(e) && Array.isArray(t) ? e.filter(function (e) {
        return -1 !== t.indexOf(e);
      }) : n;
    },
    minus: function minus(e, t) {
      return t && 0 !== t.length ? e.filter(function (e) {
        return -1 === t.indexOf(e);
      }) : e;
    },
    makeArray: function makeArray(e) {
      return y.isArray(e) ? Array.prototype.slice.call(e) : [e];
    },
    minusWithPartialMatching: function minusWithPartialMatching(e, t) {
      return t && 0 !== t.length ? e.filter(function (e) {
        return !t.some(function (t) {
          return 0 === t.indexOf(e);
        });
      }) : e;
    },
    slice: function slice(e, t) {
      return Array.prototype.slice.call(e, t);
    }
  },
      _ = {
    delay: function delay(e, t) {
      return setTimeout(e, t || 0);
    }
  },
      v = {
    areSame: function e(t, n) {
      var i = !0;
      return _typeof(t) == _typeof(n) && ("object" == _typeof(t) && null != t && null != n ? (m.each(t, function (t, s) {
        return i = e(t, n[s]);
      }), i) : t === n);
    },
    assign: function assign(e, t) {
      if ("function" == typeof Object.assign) return Object.assign.apply(null, arguments);
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");

      for (var n = Object(e), i = 1; i < arguments.length; i++) {
        var s = arguments[i];
        if (null != s) for (var o in s) {
          Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
        }
      }

      return n;
    },
    clone: function clone(e) {
      return JSON.parse(JSON.stringify(e));
    },
    compact: function compact(e) {
      var t = v.clone(e);
      return m.each(t, function (e, n) {
        null !== e && void 0 !== e && "" !== e || delete t[n];
      }), t;
    },
    fieldsAreNotEmpty: function fieldsAreNotEmpty(e, t) {
      if (!y.isPlainObject(e)) return !1;
      var n = !0;
      return m.each(t, function (t, i) {
        return n = !!e[t];
      }), n;
    },
    getDeepValue: function e(t, n) {
      var i = n.split("."),
          s = i.shift();
      return t && (i.length ? e(t[s], i.join(".")) : t[s]);
    },
    indexObjectsById: function indexObjectsById(e, t, n) {
      var i = {};
      return m.each(e, function (e, s) {
        var o = e[t],
            r = {};
        n && (r[n] = s), i[o] = v.assign(r, e);
      }), i;
    }
  },
      b = {
    ENTER: 13,
    ESC: 27,
    TAB: 9,
    SPACE: 32,
    UP: 38,
    DOWN: 40
  },
      x = {
    hint: "suggestions-hint",
    mobile: "suggestions-mobile",
    nowrap: "suggestions-nowrap",
    promo: "suggestions-promo",
    selected: "suggestions-selected",
    suggestion: "suggestions-suggestion",
    subtext: "suggestions-subtext",
    subtext_inline: "suggestions-subtext suggestions-subtext_inline",
    subtext_delimiter: "suggestions-subtext-delimiter",
    subtext_label: "suggestions-subtext suggestions-subtext_label",
    removeConstraint: "suggestions-remove",
    value: "suggestions-value"
  },
      S = ".suggestions",
      w = "\\s\"'~\\*\\.,:\\|\\[\\]\\(\\)\\{\\}<>№",
      C = new RegExp("[" + w + "]+", "g"),
      E = new RegExp("[\\-\\+\\\\\\?!@#$%^&]+", "g"),
      k = {
    escapeHtml: function escapeHtml(e) {
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;"
      };
      return e && m.each(t, function (t, n) {
        e = e.replace(new RegExp(n, "g"), t);
      }), e;
    },
    escapeRegExChars: function escapeRegExChars(e) {
      return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },
    formatToken: function formatToken(e) {
      return e && e.toLowerCase().replace(/[ёЁ]/g, "е");
    },
    getWordExtractorRegExp: function getWordExtractorRegExp() {
      return new RegExp("([^" + w + "]*)([" + w + "]*)", "g");
    },
    normalize: function normalize(e, t) {
      return k.split(e, t).join(" ");
    },
    padEnd: function padEnd(e, t, n) {
      return String.prototype.padEnd ? e.padEnd(t, n) : (t >>= 0, n = String(void 0 !== n ? n : " "), e.length > t ? String(e) : (t -= e.length, t > n.length && (n += n.repeat(t / n.length)), String(e) + n.slice(0, t)));
    },
    split: function split(e, t) {
      var n = e.toLowerCase().replace("ё", "е").replace(/(\d+)([а-я]{2,})/g, "$1 $2").replace(/([а-я]+)(\d+)/g, "$1 $2"),
          i = m.compact(n.split(C));
      if (!i.length) return [];
      var s = i.pop(),
          o = m.minus(i, t);
      return o.push(s), o;
    },
    splitTokens: function splitTokens(e) {
      var t = [];
      return m.each(e, function (e, n) {
        var i = e.split(E);
        t = t.concat(m.compact(i));
      }), t;
    },
    stringEncloses: function stringEncloses(e, t) {
      return e.length > t.length && -1 !== e.toLowerCase().indexOf(t.toLowerCase());
    },
    tokenize: function tokenize(e, t) {
      var n = m.compact(k.formatToken(e).split(C)),
          i = m.minus(n, t),
          s = m.minus(n, i);
      return n = k.withSubTokens(i.concat(s));
    },
    withSubTokens: function withSubTokens(e) {
      var t = [];
      return m.each(e, function (e, n) {
        var i = e.split(E);
        t.push(e), i.length > 1 && (t = t.concat(m.compact(i)));
      }), t;
    }
  },
      B = {
    Deferred: function Deferred() {
      return e.Deferred();
    },
    ajax: function ajax(t) {
      return e.ajax(t);
    },
    extend: function extend() {
      return e.extend.apply(null, arguments);
    },
    isJqObject: function isJqObject(t) {
      return t instanceof e;
    },
    param: function param(t) {
      return e.param(t);
    },
    proxy: function proxy(t, n) {
      return e.proxy(t, n);
    },
    select: function select(t) {
      return e(t);
    },
    supportsCors: function supportsCors() {
      return e.support.cors;
    }
  },
      T = {
    getDefaultType: function getDefaultType() {
      return B.supportsCors() ? "POST" : "GET";
    },
    getDefaultContentType: function getDefaultContentType() {
      return B.supportsCors() ? "application/json" : "application/x-www-form-urlencoded";
    },
    fixURLProtocol: function fixURLProtocol(e) {
      return B.supportsCors() ? e : e.replace(/^https?:/, location.protocol);
    },
    addUrlParams: function addUrlParams(e, t) {
      return e + (/\?/.test(e) ? "&" : "?") + B.param(t);
    },
    serialize: function serialize(e) {
      return B.supportsCors() ? JSON.stringify(e, function (e, t) {
        return null === t ? void 0 : t;
      }) : (e = v.compact(e), B.param(e, !0));
    }
  },
      j = function () {
    var e = 0;
    return function (t) {
      return (t || "") + ++e;
    };
  }(),
      V = {
    escapeRegExChars: k.escapeRegExChars,
    escapeHtml: k.escapeHtml,
    formatToken: k.formatToken,
    normalize: k.normalize,
    reWordExtractor: k.getWordExtractorRegExp,
    stringEncloses: k.stringEncloses,
    addUrlParams: T.addUrlParams,
    getDefaultContentType: T.getDefaultContentType,
    getDefaultType: T.getDefaultType,
    fixURLProtocol: T.fixURLProtocol,
    serialize: T.serialize,
    arrayMinus: m.minus,
    arrayMinusWithPartialMatching: m.minusWithPartialMatching,
    arraysIntersection: m.intersect,
    compact: m.compact,
    each: m.each,
    makeArray: m.makeArray,
    slice: m.slice,
    delay: _.delay,
    areSame: v.areSame,
    compactObject: v.compact,
    getDeepValue: v.getDeepValue,
    fieldsNotEmpty: v.fieldsAreNotEmpty,
    indexBy: v.indexObjectsById,
    isArray: y.isArray,
    isEmptyObject: y.isEmptyObject,
    isFunction: y.isFunction,
    isPlainObject: y.isPlainObject,
    uniqueId: j
  },
      L = {
    $helpers: null,
    autoSelectFirst: !1,
    containerClass: "suggestions-suggestions",
    count: 5,
    deferRequestBy: 100,
    enrichmentEnabled: !0,
    formatResult: null,
    formatSelected: null,
    headers: null,
    hint: "Выберите вариант или продолжите ввод",
    initializeInterval: 100,
    language: null,
    minChars: 1,
    mobileWidth: 600,
    noCache: !1,
    noSuggestionsHint: null,
    onInvalidateSelection: null,
    onSearchComplete: e.noop,
    onSearchError: e.noop,
    onSearchStart: e.noop,
    onSelect: null,
    onSelectNothing: null,
    onSuggestionsFetch: null,
    paramName: "query",
    params: {},
    preventBadQueries: !1,
    requestMode: "suggest",
    scrollOnFocus: !1,
    serviceUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs",
    tabDisabled: !1,
    timeout: 3e3,
    triggerSelectOnBlur: !0,
    triggerSelectOnEnter: !0,
    triggerSelectOnSpace: !1,
    type: null,
    url: null
  },
      O = function (e) {
    return function (t) {
      if (0 === t.length) return !1;
      if (1 === t.length) return !0;
      var n = e(t[0].value);
      return 0 === t.filter(function (t) {
        return 0 !== e(t.value).indexOf(n);
      }).length;
    };
  }(function (e) {
    return e;
  }),
      F = {
    matchByNormalizedQuery: function matchByNormalizedQuery(e) {
      return function (t, n) {
        var i = k.normalize(t, e),
            s = [];
        return m.each(n, function (n, o) {
          var r = n.value.toLowerCase();
          return !k.stringEncloses(t, r) && !(r.indexOf(i) > 0) && void (i === k.normalize(r, e) && s.push(o));
        }), 1 === s.length ? s[0] : -1;
      };
    },
    matchByWords: function matchByWords(e) {
      return t(e, O);
    },
    matchByWordsAddress: function matchByWordsAddress(e) {
      return t(e, O);
    },
    matchByFields: function matchByFields(e) {
      return function (t, n) {
        var i = k.splitTokens(k.split(t)),
            s = [];
        return 1 === n.length && (e && m.each(e, function (e, t) {
          var i = v.getDeepValue(n[0], t),
              o = i && k.splitTokens(k.split(i, e));
          o && o.length && (s = s.concat(o));
        }), 0 === m.minusWithPartialMatching(i, s).length) ? 0 : -1;
      };
    }
  },
      P = ["ао", "аобл", "дом", "респ", "а/я", "аал", "автодорога", "аллея", "арбан", "аул", "б-р", "берег", "бугор", "вал", "вл", "волость", "въезд", "высел", "г", "городок", "гск", "д", "двлд", "днп", "дор", "дп", "ж/д_будка", "ж/д_казарм", "ж/д_оп", "ж/д_платф", "ж/д_пост", "ж/д_рзд", "ж/д_ст", "жилзона", "жилрайон", "жт", "заезд", "заимка", "зона", "к", "казарма", "канал", "кв", "кв-л", "км", "кольцо", "комн", "кордон", "коса", "кп", "край", "линия", "лпх", "м", "массив", "местность", "мкр", "мост", "н/п", "наб", "нп", "обл", "округ", "остров", "оф", "п", "п/о", "п/р", "п/ст", "парк", "пгт", "пер", "переезд", "пл", "пл-ка", "платф", "погост", "полустанок", "починок", "пр-кт", "проезд", "промзона", "просек", "просека", "проселок", "проток", "протока", "проулок", "р-н", "рзд", "россия", "рп", "ряды", "с", "с/а", "с/мо", "с/о", "с/п", "с/с", "сад", "сквер", "сл", "снт", "спуск", "ст", "ст-ца", "стр", "тер", "тракт", "туп", "у", "ул", "уч-к", "ф/х", "ферма", "х", "ш", "бульвар", "владение", "выселки", "гаражно-строительный", "город", "деревня", "домовладение", "дорога", "квартал", "километр", "комната", "корпус", "литер", "леспромхоз", "местечко", "микрорайон", "набережная", "область", "переулок", "платформа", "площадка", "площадь", "поселение", "поселок", "проспект", "разъезд", "район", "республика", "село", "сельсовет", "слобода", "сооружение", "станица", "станция", "строение", "территория", "тупик", "улица", "улус", "участок", "хутор", "шоссе"],
      D = [{
    id: "kladr_id",
    fields: ["kladr_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "postal_code",
    fields: ["postal_code"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "country_iso_code",
    fields: ["country_iso_code"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "country",
    fields: ["country"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 0,
      zeros: 13
    },
    fiasType: "country_iso_code"
  }, {
    id: "region_iso_code",
    fields: ["region_iso_code"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "region_fias_id",
    fields: ["region_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "region_type_full",
    fields: ["region_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 2,
      zeros: 11
    },
    fiasType: "region_fias_id"
  }, {
    id: "region",
    fields: ["region", "region_type", "region_type_full", "region_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 2,
      zeros: 11
    },
    fiasType: "region_fias_id"
  }, {
    id: "area_fias_id",
    fields: ["area_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "area_type_full",
    fields: ["area_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 5,
      zeros: 8
    },
    fiasType: "area_fias_id"
  }, {
    id: "area",
    fields: ["area", "area_type", "area_type_full", "area_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 5,
      zeros: 8
    },
    fiasType: "area_fias_id"
  }, {
    id: "city_fias_id",
    fields: ["city_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "city_type_full",
    fields: ["city_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 8,
      zeros: 5
    },
    fiasType: "city_fias_id"
  }, {
    id: "city",
    fields: ["city", "city_type", "city_type_full", "city_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 8,
      zeros: 5
    },
    fiasType: "city_fias_id"
  }, {
    id: "city_district_fias_id",
    fields: ["city_district_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "city_district_type_full",
    fields: ["city_district_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "city_district_fias_id"
  }, {
    id: "city_district",
    fields: ["city_district", "city_district_type", "city_district_type_full", "city_district_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "city_district_fias_id"
  }, {
    id: "settlement_fias_id",
    fields: ["settlement_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "settlement_type_full",
    fields: ["settlement_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "settlement_fias_id"
  }, {
    id: "settlement",
    fields: ["settlement", "settlement_type", "settlement_type_full", "settlement_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "settlement_fias_id"
  }, {
    id: "street_fias_id",
    fields: ["street_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "street_type_full",
    fields: ["street_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "street_fias_id"
  }, {
    id: "street",
    fields: ["street", "street_type", "street_type_full", "street_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "street_fias_id"
  }, {
    id: "house",
    fields: ["house", "house_type", "house_type_full", "block", "block_type"],
    forBounds: !0,
    forLocations: !1,
    kladrFormat: {
      digits: 19
    }
  }],
      I = {
    urlSuffix: "address",
    noSuggestionsHint: "Неизвестный адрес",
    matchers: [F.matchByNormalizedQuery(P), F.matchByWordsAddress(P)],
    dataComponents: D,
    dataComponentsById: v.indexObjectsById(D, "id", "index"),
    unformattableTokens: P,
    enrichmentEnabled: !0,
    enrichmentMethod: "suggest",
    enrichmentParams: {
      count: 1,
      locations: null,
      locations_boost: null,
      from_bound: null,
      to_bound: null
    },
    getEnrichmentQuery: function getEnrichmentQuery(e) {
      return e.unrestricted_value;
    },
    geoEnabled: !0,
    isDataComplete: function isDataComplete(e) {
      var t = [this.bounds.to || "flat"],
          n = e.data;
      return !y.isPlainObject(n) || v.fieldsAreNotEmpty(n, t);
    },
    composeValue: function composeValue(e, t) {
      var n = e.country,
          i = e.region_with_type || m.compact([e.region, e.region_type]).join(" ") || e.region_type_full,
          s = e.area_with_type || m.compact([e.area_type, e.area]).join(" ") || e.area_type_full,
          o = e.city_with_type || m.compact([e.city_type, e.city]).join(" ") || e.city_type_full,
          r = e.settlement_with_type || m.compact([e.settlement_type, e.settlement]).join(" ") || e.settlement_type_full,
          a = e.city_district_with_type || m.compact([e.city_district_type, e.city_district]).join(" ") || e.city_district_type_full,
          u = e.street_with_type || m.compact([e.street_type, e.street]).join(" ") || e.street_type_full,
          l = m.compact([e.house_type, e.house, e.block_type, e.block]).join(" "),
          c = m.compact([e.flat_type, e.flat]).join(" "),
          d = e.postal_box && "а/я " + e.postal_box;
      return i === o && (i = ""), t && t.saveCityDistrict || (t && t.excludeCityDistrict ? a = "" : a && !e.city_district_fias_id && (a = "")), m.compact([n, i, s, o, a, r, u, l, c, d]).join(", ");
    },
    formatResult: function () {
      var e = [],
          t = !1;
      return D.forEach(function (n) {
        t && e.push(n.id), "city_district" === n.id && (t = !0);
      }), function (t, n, i, s) {
        var o,
            r,
            a,
            u = this,
            l = i.data && i.data.city_district_with_type,
            c = s && s.unformattableTokens,
            d = i.data && i.data.history_values;
        return d && d.length > 0 && (o = k.tokenize(n, c), r = this.type.findUnusedTokens(o, t), (a = this.type.getFormattedHistoryValues(r, d)) && (t += a)), t = u.highlightMatches(t, n, i, s), t = u.wrapFormattedValue(t, i), l && (!u.bounds.own.length || u.bounds.own.indexOf("street") >= 0) && !y.isEmptyObject(u.copyDataComponents(i.data, e)) && (t += '<div class="' + u.classes.subtext + '">' + u.highlightMatches(l, n, i) + "</div>"), t;
      };
    }(),
    findUnusedTokens: function findUnusedTokens(e, t) {
      return e.filter(function (e) {
        return -1 === t.indexOf(e);
      });
    },
    getFormattedHistoryValues: function getFormattedHistoryValues(e, t) {
      var n = [],
          i = "";
      return t.forEach(function (t) {
        m.each(e, function (e) {
          if (t.toLowerCase().indexOf(e) >= 0) return n.push(t), !1;
        });
      }), n.length > 0 && (i = " (бывш. " + n.join(", ") + ")"), i;
    },
    getSuggestionValue: function getSuggestionValue(e, t) {
      var n = null;
      return t.hasSameValues ? n = e.options.restrict_value ? this.getValueWithinConstraints(e, t.suggestion) : e.bounds.own.length ? this.getValueWithinBounds(e, t.suggestion) : t.suggestion.unrestricted_value : t.hasBeenEnriched && e.options.restrict_value && (n = this.getValueWithinConstraints(e, t.suggestion, {
        excludeCityDistrict: !0
      })), n;
    },
    getValueWithinConstraints: function getValueWithinConstraints(e, t, n) {
      return this.composeValue(e.getUnrestrictedData(t.data), n);
    },
    getValueWithinBounds: function getValueWithinBounds(e, t, n) {
      var i = e.copyDataComponents(t.data, e.bounds.own.concat(["city_district_fias_id"]));
      return this.composeValue(i, n);
    }
  },
      q = [{
    id: "kladr_id",
    fields: ["kladr_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "region_fias_id",
    fields: ["region_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "region_type_full",
    fields: ["region_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 2,
      zeros: 11
    },
    fiasType: "region_fias_id"
  }, {
    id: "region",
    fields: ["region", "region_type", "region_type_full", "region_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 2,
      zeros: 11
    },
    fiasType: "region_fias_id"
  }, {
    id: "area_fias_id",
    fields: ["area_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "area_type_full",
    fields: ["area_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 5,
      zeros: 8
    },
    fiasType: "area_fias_id"
  }, {
    id: "area",
    fields: ["area", "area_type", "area_type_full", "area_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 5,
      zeros: 8
    },
    fiasType: "area_fias_id"
  }, {
    id: "city_fias_id",
    fields: ["city_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "city_type_full",
    fields: ["city_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 8,
      zeros: 5
    },
    fiasType: "city_fias_id"
  }, {
    id: "city",
    fields: ["city", "city_type", "city_type_full", "city_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 8,
      zeros: 5
    },
    fiasType: "city_fias_id"
  }, {
    id: "city_district_fias_id",
    fields: ["city_district_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "city_district_type_full",
    fields: ["city_district_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "city_district_fias_id"
  }, {
    id: "city_district",
    fields: ["city_district", "city_district_type", "city_district_type_full", "city_district_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "city_district_fias_id"
  }, {
    id: "settlement_fias_id",
    fields: ["settlement_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "settlement_type_full",
    fields: ["settlement_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "settlement_fias_id"
  }, {
    id: "settlement",
    fields: ["settlement", "settlement_type", "settlement_type_full", "settlement_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 11,
      zeros: 2
    },
    fiasType: "settlement_fias_id"
  }, {
    id: "planning_structure_fias_id",
    fields: ["planning_structure_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "planning_structure_type_full",
    fields: ["planning_structure_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "planning_structure_fias_id"
  }, {
    id: "planning_structure",
    fields: ["planning_structure", "planning_structure_type", "planning_structure_type_full", "planning_structure_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "planning_structure_fias_id"
  }, {
    id: "street_fias_id",
    fields: ["street_fias_id"],
    forBounds: !1,
    forLocations: !0
  }, {
    id: "street_type_full",
    fields: ["street_type_full"],
    forBounds: !1,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "street_fias_id"
  }, {
    id: "street",
    fields: ["street", "street_type", "street_type_full", "street_with_type"],
    forBounds: !0,
    forLocations: !0,
    kladrFormat: {
      digits: 15,
      zeros: 2
    },
    fiasType: "street_fias_id"
  }, {
    id: "house",
    fields: ["house", "house_type", "block", "building_type", "building"],
    forBounds: !0,
    forLocations: !1,
    kladrFormat: {
      digits: 19
    }
  }],
      z = {
    urlSuffix: "fias",
    noSuggestionsHint: "Неизвестный адрес",
    matchers: [F.matchByNormalizedQuery(P), F.matchByWordsAddress(P)],
    dataComponents: q,
    dataComponentsById: v.indexObjectsById(q, "id", "index"),
    unformattableTokens: P,
    isDataComplete: function isDataComplete(e) {
      var t = [this.bounds.to || "house"],
          n = e.data;
      return !y.isPlainObject(n) || v.fieldsAreNotEmpty(n, t);
    },
    composeValue: function composeValue(e, t) {
      var n = e.country,
          i = e.region_with_type || m.compact([e.region, e.region_type]).join(" ") || e.region_type_full,
          s = e.area_with_type || m.compact([e.area_type, e.area]).join(" ") || e.area_type_full,
          o = e.city_with_type || m.compact([e.city_type, e.city]).join(" ") || e.city_type_full,
          r = e.settlement_with_type || m.compact([e.settlement_type, e.settlement]).join(" ") || e.settlement_type_full,
          a = e.city_district_with_type || m.compact([e.city_district_type, e.city_district]).join(" ") || e.city_district_type_full,
          u = e.planning_structure_with_type || m.compact([e.planning_structure_type, e.planning_structure]).join(" ") || e.planning_structure_type_full,
          l = e.street_with_type || m.compact([e.street_type, e.street]).join(" ") || e.street_type_full,
          c = m.compact([e.house_type, e.house, e.block_type, e.block]).join(" "),
          d = m.compact([e.flat_type, e.flat]).join(" "),
          f = e.postal_box && "а/я " + e.postal_box;
      return i === o && (i = ""), t && t.saveCityDistrict || (t && t.excludeCityDistrict ? a = "" : a && !e.city_district_fias_id && (a = "")), m.compact([n, i, s, o, a, r, u, l, c, d, f]).join(", ");
    },
    formatResult: function () {
      return function (e, t, n, i) {
        var s = this;
        return e = s.highlightMatches(e, t, n, i), e = s.wrapFormattedValue(e, n);
      };
    }(),
    getSuggestionValue: I.getSuggestionValue,
    getValueWithinConstraints: I.getValueWithinConstraints,
    getValueWithinBounds: I.getValueWithinBounds
  },
      R = {
    urlSuffix: "fio",
    noSuggestionsHint: !1,
    matchers: [F.matchByNormalizedQuery(), F.matchByWords()],
    fieldNames: {
      surname: "фамилия",
      name: "имя",
      patronymic: "отчество"
    },
    isDataComplete: function isDataComplete(e) {
      var t,
          i = this,
          s = i.options.params,
          o = e.data;
      return y.isFunction(s) && (s = s.call(i.element, e.value)), s && s.parts ? t = s.parts.map(function (e) {
        return e.toLowerCase();
      }) : (t = ["surname", "name"], n(e, "surname") && t.push("patronymic")), v.fieldsAreNotEmpty(o, t);
    },
    composeValue: function composeValue(e) {
      return m.compact([e.surname, e.name, e.patronymic]).join(" ");
    }
  },
      A = {
    LEGAL: [2, 2, 5, 1],
    INDIVIDUAL: [2, 2, 6, 2]
  },
      $ = {
    urlSuffix: "party",
    noSuggestionsHint: "Неизвестная организация",
    matchers: [F.matchByFields({
      value: null,
      "data.address.value": P,
      "data.inn": null,
      "data.ogrn": null
    })],
    dataComponents: D,
    enrichmentEnabled: !0,
    enrichmentMethod: "findById",
    enrichmentParams: {
      count: 1,
      locations_boost: null
    },
    getEnrichmentQuery: function getEnrichmentQuery(e) {
      return e.data.hid;
    },
    geoEnabled: !0,
    formatResult: function formatResult(e, t, n, o) {
      var r = this,
          a = r.type.formatResultInn.call(r, n, t),
          u = r.highlightMatches(v.getDeepValue(n.data, "ogrn"), t, n),
          l = i(a, u),
          c = r.highlightMatches(v.getDeepValue(n.data, "management.name"), t, n),
          d = v.getDeepValue(n.data, "address.value") || "";
      return r.isMobile && ((o || (o = {})).maxLength = 50), e = s.call(r, e, v.getDeepValue(n.data, "name.latin"), t, n, o), e = r.wrapFormattedValue(e, n), d && (d = d.replace(/^(\d{6}|Россия),\s+/i, ""), d = r.isMobile ? d.replace(new RegExp("^([^" + w + "]+[" + w + "]+[^" + w + "]+).*"), "$1") : r.highlightMatches(d, t, n, {
        unformattableTokens: P
      })), (l || d || c) && (e += '<div class="' + r.classes.subtext + '"><span class="' + r.classes.subtext_inline + '">' + (l || "") + "</span>" + (i(d, c) || "") + "</div>"), e;
    },
    formatResultInn: function formatResultInn(e, t) {
      var n,
          i,
          s = this,
          o = e.data && e.data.inn,
          r = A[e.data && e.data.type],
          a = /\d/;
      if (o) return i = s.highlightMatches(o, t, e), r && (i = i.split(""), n = r.map(function (e) {
        for (var t, n = ""; e && (t = i.shift());) {
          n += t, a.test(t) && e--;
        }

        return n;
      }), i = n.join('<span class="' + s.classes.subtext_delimiter + '"></span>') + i.join("")), i;
    }
  },
      N = {
    urlSuffix: "email",
    noSuggestionsHint: !1,
    matchers: [F.matchByNormalizedQuery()],
    isQueryRequestable: function isQueryRequestable(e) {
      return this.options.suggest_local || e.indexOf("@") >= 0;
    }
  },
      M = {
    urlSuffix: "bank",
    noSuggestionsHint: "Неизвестный банк",
    matchers: [F.matchByFields({
      value: null,
      "data.bic": null,
      "data.swift": null
    })],
    dataComponents: D,
    geoEnabled: !0,
    formatResult: function formatResult(e, t, n, i) {
      var s = this,
          o = s.highlightMatches(v.getDeepValue(n.data, "bic"), t, n),
          r = v.getDeepValue(n.data, "address.value") || "";
      return e = s.highlightMatches(e, t, n, i), e = s.wrapFormattedValue(e, n), r && (r = r.replace(/^\d{6}( РОССИЯ)?, /i, ""), r = s.isMobile ? r.replace(new RegExp("^([^" + w + "]+[" + w + "]+[^" + w + "]+).*"), "$1") : s.highlightMatches(r, t, n, {
        unformattableTokens: P
      })), (o || r) && (e += '<div class="' + s.classes.subtext + '"><span class="' + s.classes.subtext_inline + '">' + o + "</span>" + r + "</div>"), e;
    },
    formatSelected: function formatSelected(e) {
      return v.getDeepValue(e, "data.name.payment") || null;
    }
  },
      W = {
    NAME: R,
    ADDRESS: I,
    FIAS: z,
    PARTY: $,
    EMAIL: N,
    BANK: M
  };

  W.get = function (e) {
    return W.hasOwnProperty(e) ? W[e] : new o(e);
  }, B.extend(L, {
    suggest_local: !0
  });
  var U = {
    chains: {},
    on: function on(e, t) {
      return this.get(e).push(t), this;
    },
    get: function get(e) {
      var t = this.chains;
      return t[e] || (t[e] = []);
    }
  },
      H = {
    suggest: {
      defaultParams: {
        type: V.getDefaultType(),
        dataType: "json",
        contentType: V.getDefaultContentType()
      },
      addTypeInUrl: !0
    },
    "iplocate/address": {
      defaultParams: {
        type: "GET",
        dataType: "json"
      },
      addTypeInUrl: !1
    },
    status: {
      defaultParams: {
        type: "GET",
        dataType: "json"
      },
      addTypeInUrl: !0
    },
    findById: {
      defaultParams: {
        type: V.getDefaultType(),
        dataType: "json",
        contentType: V.getDefaultContentType()
      },
      addTypeInUrl: !0
    }
  },
      Q = {
    suggest: {
      method: "suggest",
      userSelect: !0,
      updateValue: !0,
      enrichmentEnabled: !0
    },
    findById: {
      method: "findById",
      userSelect: !1,
      updateValue: !1,
      enrichmentEnabled: !1
    }
  };
  r.prototype = {
    initialize: function initialize() {
      var e = this;
      e.uniqueId = V.uniqueId("i"), e.createWrapper(), e.notify("initialize"), e.bindWindowEvents(), e.setOptions(), e.inferIsMobile(), e.notify("ready");
    },
    deferInitialization: function deferInitialization() {
      var e,
          t = this,
          n = "mouseover focus keydown",
          i = function i() {
        t.initializer.resolve(), t.enable();
      };

      t.initializer.always(function () {
        t.el.off(n, i), clearInterval(e);
      }), t.disabled = !0, t.el.on(n, i), e = setInterval(function () {
        t.el.is(":visible") && i();
      }, t.options.initializeInterval);
    },
    isInitialized: function isInitialized() {
      return "resolved" === this.initializer.state();
    },
    dispose: function dispose() {
      var e = this;
      e.initializer.reject(), e.notify("dispose"), e.el.removeData("suggestions").removeClass("suggestions-input"), e.unbindWindowEvents(), e.removeWrapper(), e.el.trigger("suggestions-dispose");
    },
    notify: function notify(t) {
      var n = this,
          i = V.slice(arguments, 1);
      return e.map(U.get(t), function (e) {
        return e.apply(n, i);
      });
    },
    createWrapper: function createWrapper() {
      var t = this;
      t.$wrapper = e('<div class="suggestions-wrapper"/>'), t.el.after(t.$wrapper), t.$wrapper.on("mousedown" + S, e.proxy(t.onMousedown, t));
    },
    removeWrapper: function removeWrapper() {
      var t = this;
      t.$wrapper && t.$wrapper.remove(), e(t.options.$helpers).off(S);
    },
    onMousedown: function onMousedown(t) {
      var n = this;
      t.preventDefault(), n.cancelBlur = !0, V.delay(function () {
        delete n.cancelBlur;
      }), 0 == e(t.target).closest(".ui-menu-item").length && V.delay(function () {
        e(document).one("mousedown", function (t) {
          var i = n.el.add(n.$wrapper).add(n.options.$helpers);
          n.options.floating && (i = i.add(n.$container)), i = i.filter(function () {
            return this === t.target || e.contains(this, t.target);
          }), i.length || n.hide();
        });
      });
    },
    bindWindowEvents: function bindWindowEvents() {
      var t = e.proxy(this.inferIsMobile, this);
      this.$viewport.on("resize" + S + this.uniqueId, t);
    },
    unbindWindowEvents: function unbindWindowEvents() {
      this.$viewport.off("resize" + S + this.uniqueId);
    },
    scrollToTop: function scrollToTop() {
      var t = this,
          n = t.options.scrollOnFocus;
      !0 === n && (n = t.el), n instanceof e && n.length > 0 && e("body,html").animate({
        scrollTop: n.offset().top
      }, "fast");
    },
    setOptions: function setOptions(t) {
      var n = this;
      e.extend(n.options, t), n.type = W.get(n.options.type), e.each({
        requestMode: Q
      }, function (t, i) {
        if (n[t] = i[n.options[t]], !n[t]) throw n.disable(), "`" + t + "` option is incorrect! Must be one of: " + e.map(i, function (e, t) {
          return '"' + t + '"';
        }).join(", ");
      }), e(n.options.$helpers).off(S).on("mousedown" + S, e.proxy(n.onMousedown, n)), n.isInitialized() && n.notify("setOptions");
    },
    inferIsMobile: function inferIsMobile() {
      this.isMobile = this.$viewport.width() <= this.options.mobileWidth;
    },
    clearCache: function clearCache() {
      this.cachedResponse = {}, this.enrichmentCache = {}, this.badQueries = [];
    },
    clear: function clear() {
      var e = this,
          t = e.selection;
      e.isInitialized() && (e.clearCache(), e.currentValue = "", e.selection = null, e.hide(), e.suggestions = [], e.el.val(""), e.el.trigger("suggestions-clear"), e.notify("clear"), e.trigger("InvalidateSelection", t));
    },
    disable: function disable() {
      var e = this;
      e.disabled = !0, e.abortRequest(), e.visible && e.hide();
    },
    enable: function enable() {
      this.disabled = !1;
    },
    isUnavailable: function isUnavailable() {
      return this.disabled;
    },
    update: function update() {
      var e = this,
          t = e.el.val();
      e.isInitialized() && (e.currentValue = t, e.isQueryRequestable(t) ? e.updateSuggestions(t) : e.hide());
    },
    setSuggestion: function setSuggestion(t) {
      var n,
          i,
          s = this;
      e.isPlainObject(t) && e.isPlainObject(t.data) && (t = e.extend(!0, {}, t), s.isUnavailable() && s.initializer && "pending" === s.initializer.state() && (s.initializer.resolve(), s.enable()), s.bounds.own.length && (s.checkValueBounds(t), n = s.copyDataComponents(t.data, s.bounds.all), t.data.kladr_id && (n.kladr_id = s.getBoundedKladrId(t.data.kladr_id, s.bounds.all)), t.data = n), s.selection = t, s.suggestions = [t], i = s.getSuggestionValue(t) || "", s.currentValue = i, s.el.val(i), s.abortRequest(), s.el.trigger("suggestions-set"));
    },
    fixData: function fixData() {
      var t = this,
          n = t.extendedCurrentValue(),
          i = t.el.val(),
          s = e.Deferred();
      s.done(function (e) {
        t.selectSuggestion(e, 0, i, {
          hasBeenEnriched: !0
        }), t.el.trigger("suggestions-fixdata", e);
      }).fail(function () {
        t.selection = null, t.el.trigger("suggestions-fixdata");
      }), t.isQueryRequestable(n) ? (t.currentValue = n, t.getSuggestions(n, {
        count: 1,
        from_bound: null,
        to_bound: null
      }).done(function (e) {
        var t = e[0];
        t ? s.resolve(t) : s.reject();
      }).fail(function () {
        s.reject();
      })) : s.reject();
    },
    extendedCurrentValue: function extendedCurrentValue() {
      var t = this,
          n = t.getParentInstance(),
          i = n && n.extendedCurrentValue(),
          s = e.trim(t.el.val());
      return V.compact([i, s]).join(" ");
    },
    getAjaxParams: function getAjaxParams(t, n) {
      var i = this,
          s = e.trim(i.options.token),
          o = e.trim(i.options.partner),
          a = i.options.serviceUrl,
          u = i.options.url,
          l = H[t],
          c = e.extend({
        timeout: i.options.timeout
      }, l.defaultParams),
          d = {};
      return u ? a = u : (/\/$/.test(a) || (a += "/"), a += t, l.addTypeInUrl && (a += "/" + i.type.urlSuffix)), a = V.fixURLProtocol(a), e.support.cors ? (s && (d.Authorization = "Token " + s), o && (d["X-Partner"] = o), d["X-Version"] = r.version, c.headers || (c.headers = {}), c.xhrFields || (c.xhrFields = {}), e.extend(c.headers, i.options.headers, d), c.xhrFields.withCredentials = !1) : (s && (d.token = s), o && (d.partner = o), d.version = r.version, a = V.addUrlParams(a, d)), c.url = a, e.extend(c, n);
    },
    isQueryRequestable: function isQueryRequestable(e) {
      var t,
          n = this;
      return t = e.length >= n.options.minChars, t && n.type.isQueryRequestable && (t = n.type.isQueryRequestable.call(n, e)), t;
    },
    constructRequestParams: function constructRequestParams(t, n) {
      var i = this,
          s = i.options,
          o = e.isFunction(s.params) ? s.params.call(i.element, t) : e.extend({}, s.params);
      return i.type.constructRequestParams && e.extend(o, i.type.constructRequestParams.call(i)), e.each(i.notify("requestParams"), function (t, n) {
        e.extend(o, n);
      }), o[s.paramName] = t, e.isNumeric(s.count) && s.count > 0 && (o.count = s.count), s.language && (o.language = s.language), e.extend(o, n);
    },
    updateSuggestions: function updateSuggestions(e) {
      var t = this;
      t.fetchPhase = t.getSuggestions(e).done(function (n) {
        t.assignSuggestions(n, e);
      });
    },
    getSuggestions: function getSuggestions(t, n, i) {
      var s,
          o = this,
          r = o.options,
          a = i && i.noCallbacks,
          u = i && i.useEnrichmentCache,
          l = i && i.method || o.requestMode.method,
          c = o.constructRequestParams(t, n),
          d = e.param(c || {}),
          f = e.Deferred();
      return s = o.cachedResponse[d], s && e.isArray(s.suggestions) ? f.resolve(s.suggestions) : o.isBadQuery(t) ? f.reject() : a || !1 !== r.onSearchStart.call(o.element, c) ? o.doGetSuggestions(c, l).done(function (e) {
        o.processResponse(e) && t == o.currentValue ? (r.noCache || (u ? o.enrichmentCache[t] = e.suggestions[0] : (o.enrichResponse(e, t), o.cachedResponse[d] = e, r.preventBadQueries && 0 === e.suggestions.length && o.badQueries.push(t))), f.resolve(e.suggestions)) : f.reject(), a || r.onSearchComplete.call(o.element, t, e.suggestions);
      }).fail(function (e, n, i) {
        f.reject(), a || "abort" === n || r.onSearchError.call(o.element, t, e, n, i);
      }) : f.reject(), f;
    },
    doGetSuggestions: function doGetSuggestions(t, n) {
      var i = this,
          s = e.ajax(i.getAjaxParams(n, {
        data: V.serialize(t)
      }));
      return i.abortRequest(), i.currentRequest = s, i.notify("request"), s.always(function () {
        i.currentRequest = null, i.notify("request");
      }), s;
    },
    isBadQuery: function isBadQuery(t) {
      if (!this.options.preventBadQueries) return !1;
      var n = !1;
      return e.each(this.badQueries, function (e, i) {
        return !(n = 0 === t.indexOf(i));
      }), n;
    },
    abortRequest: function abortRequest() {
      var e = this;
      e.currentRequest && e.currentRequest.abort();
    },
    processResponse: function processResponse(t) {
      var n,
          i = this;
      return !(!t || !e.isArray(t.suggestions)) && (i.verifySuggestionsFormat(t.suggestions), i.setUnrestrictedValues(t.suggestions), e.isFunction(i.options.onSuggestionsFetch) && (n = i.options.onSuggestionsFetch.call(i.element, t.suggestions), e.isArray(n) && (t.suggestions = n)), !0);
    },
    verifySuggestionsFormat: function verifySuggestionsFormat(t) {
      "string" == typeof t[0] && e.each(t, function (e, n) {
        t[e] = {
          value: n,
          data: null
        };
      });
    },
    getSuggestionValue: function getSuggestionValue(t, n) {
      var i,
          s = this,
          o = s.options.formatSelected || s.type.formatSelected,
          r = n && n.hasSameValues,
          a = n && n.hasBeenEnriched,
          u = null;
      return e.isFunction(o) && (i = o.call(s, t)), "string" != typeof i && (i = t.value, s.type.getSuggestionValue && null !== (u = s.type.getSuggestionValue(s, {
        suggestion: t,
        hasSameValues: r,
        hasBeenEnriched: a
      })) && (i = u)), i;
    },
    hasSameValues: function hasSameValues(t) {
      var n = !1;
      return e.each(this.suggestions, function (e, i) {
        if (i.value === t.value && i !== t) return n = !0, !1;
      }), n;
    },
    assignSuggestions: function assignSuggestions(e, t) {
      var n = this;
      n.suggestions = e, n.notify("assignSuggestions", t);
    },
    shouldRestrictValues: function shouldRestrictValues() {
      var e = this;
      return e.options.restrict_value && e.constraints && 1 == Object.keys(e.constraints).length;
    },
    setUnrestrictedValues: function setUnrestrictedValues(t) {
      var n = this,
          i = n.shouldRestrictValues(),
          s = n.getFirstConstraintLabel();
      e.each(t, function (e, t) {
        t.unrestricted_value || (t.unrestricted_value = i ? s + ", " + t.value : t.value);
      });
    },
    areSuggestionsSame: function areSuggestionsSame(e, t) {
      return e && t && e.value === t.value && V.areSame(e.data, t.data);
    },
    getNoSuggestionsHint: function getNoSuggestionsHint() {
      var e = this;
      return !1 !== e.options.noSuggestionsHint && (e.options.noSuggestionsHint || e.type.noSuggestionsHint);
    }
  };
  var Z = {
    setupElement: function setupElement() {
      this.el.attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").addClass("suggestions-input").css("box-sizing", "border-box");
    },
    bindElementEvents: function bindElementEvents() {
      var t = this;
      t.el.on("keydown" + S, e.proxy(t.onElementKeyDown, t)), t.el.on(["keyup" + S, "cut" + S, "paste" + S, "input" + S].join(" "), e.proxy(t.onElementKeyUp, t)), t.el.on("blur" + S, e.proxy(t.onElementBlur, t)), t.el.on("focus" + S, e.proxy(t.onElementFocus, t));
    },
    unbindElementEvents: function unbindElementEvents() {
      this.el.off(S);
    },
    onElementBlur: function onElementBlur() {
      var e = this;
      if (e.cancelBlur) return void (e.cancelBlur = !1);
      e.options.triggerSelectOnBlur ? e.isUnavailable() || e.selectCurrentValue({
        noSpace: !0
      }).always(function () {
        e.hide();
      }) : e.hide(), e.fetchPhase.abort && e.fetchPhase.abort();
    },
    onElementFocus: function onElementFocus() {
      var t = this;
      t.cancelFocus || V.delay(e.proxy(t.completeOnFocus, t)), t.cancelFocus = !1;
    },
    onElementKeyDown: function onElementKeyDown(e) {
      var t = this;
      if (!t.isUnavailable()) if (t.visible) {
        switch (e.which) {
          case b.ESC:
            t.el.val(t.currentValue), t.hide(), t.abortRequest();
            break;

          case b.TAB:
            if (!1 === t.options.tabDisabled) return;
            break;

          case b.ENTER:
            t.options.triggerSelectOnEnter && t.selectCurrentValue();
            break;

          case b.SPACE:
            return void (t.options.triggerSelectOnSpace && t.isCursorAtEnd() && (e.preventDefault(), t.selectCurrentValue({
              continueSelecting: !0,
              dontEnrich: !0
            }).fail(function () {
              t.currentValue += " ", t.el.val(t.currentValue), t.proceedChangedValue();
            })));

          case b.UP:
            t.moveUp();
            break;

          case b.DOWN:
            t.moveDown();
            break;

          default:
            return;
        }

        e.stopImmediatePropagation(), e.preventDefault();
      } else switch (e.which) {
        case b.DOWN:
          t.suggest();
          break;

        case b.ENTER:
          t.options.triggerSelectOnEnter && t.triggerOnSelectNothing();
      }
    },
    onElementKeyUp: function onElementKeyUp(e) {
      var t = this;

      if (!t.isUnavailable()) {
        switch (e.which) {
          case b.UP:
          case b.DOWN:
          case b.ENTER:
            return;
        }

        clearTimeout(t.onChangeTimeout), t.inputPhase.reject(), t.currentValue !== t.el.val() && t.proceedChangedValue();
      }
    },
    proceedChangedValue: function proceedChangedValue() {
      var t = this;
      t.abortRequest(), t.inputPhase = e.Deferred().done(e.proxy(t.onValueChange, t)), t.options.deferRequestBy > 0 ? t.onChangeTimeout = V.delay(function () {
        t.inputPhase.resolve();
      }, t.options.deferRequestBy) : t.inputPhase.resolve();
    },
    onValueChange: function onValueChange() {
      var e,
          t = this;
      t.selection && (e = t.selection, t.selection = null, t.trigger("InvalidateSelection", e)), t.selectedIndex = -1, t.update(), t.notify("valueChange");
    },
    completeOnFocus: function completeOnFocus() {
      var e = this;
      e.isUnavailable() || e.isElementFocused() && (e.update(), e.isMobile && (e.setCursorAtEnd(), e.scrollToTop()));
    },
    isElementFocused: function isElementFocused() {
      return document.activeElement === this.element;
    },
    isElementDisabled: function isElementDisabled() {
      return Boolean(this.element.getAttribute("disabled") || this.element.getAttribute("readonly"));
    },
    isCursorAtEnd: function isCursorAtEnd() {
      var e,
          t,
          n = this,
          i = n.el.val().length;

      try {
        if ("number" == typeof (e = n.element.selectionStart)) return e === i;
      } catch (e) {}

      return !document.selection || (t = document.selection.createRange(), t.moveStart("character", -i), i === t.text.length);
    },
    setCursorAtEnd: function setCursorAtEnd() {
      var e = this.element;

      try {
        e.selectionEnd = e.selectionStart = e.value.length, e.scrollLeft = e.scrollWidth;
      } catch (t) {
        e.value = e.value;
      }
    }
  };
  e.extend(r.prototype, Z), U.on("initialize", Z.bindElementEvents).on("dispose", Z.unbindElementEvents);
  var K = {};
  a();
  var G = {
    checkStatus: function checkStatus() {
      function e(e) {
        V.isFunction(t.options.onSearchError) && t.options.onSearchError.call(t.element, null, s, "error", e);
      }

      var t = this,
          n = t.options.token && t.options.token.trim() || "",
          i = t.options.type + n,
          s = K[i];
      s || (s = K[i] = B.ajax(t.getAjaxParams("status"))), s.done(function (n, i, s) {
        if (n.search) {
          var o = s.getResponseHeader("X-Plan");
          n.plan = o, B.extend(t.status, n);
        } else e("Service Unavailable");
      }).fail(function () {
        e(s.statusText);
      });
    }
  };
  r.resetTokens = a, B.extend(r.prototype, G), U.on("setOptions", G.checkStatus);
  var J,
      X = !0,
      Y = {
    checkLocation: function checkLocation() {
      var t = this,
          n = t.options.geoLocation;
      t.type.geoEnabled && n && (t.geoLocation = e.Deferred(), e.isPlainObject(n) || e.isArray(n) ? t.geoLocation.resolve(n) : (J || (J = e.ajax(t.getAjaxParams("iplocate/address"))), J.done(function (e) {
        var n = e && e.location && e.location.data;
        n && n.kladr_id ? t.geoLocation.resolve({
          kladr_id: n.kladr_id
        }) : t.geoLocation.reject();
      }).fail(function () {
        t.geoLocation.reject();
      })));
    },
    getGeoLocation: function getGeoLocation() {
      return this.geoLocation;
    },
    constructParams: function constructParams() {
      var t = this,
          n = {};
      return t.geoLocation && e.isFunction(t.geoLocation.promise) && "resolved" == t.geoLocation.state() && t.geoLocation.done(function (t) {
        n.locations_boost = e.makeArray(t);
      }), n;
    }
  };
  "GET" != V.getDefaultType() && (e.extend(L, {
    geoLocation: X
  }), e.extend(r, {
    resetLocation: u
  }), e.extend(r.prototype, {
    getGeoLocation: Y.getGeoLocation
  }), U.on("setOptions", Y.checkLocation).on("requestParams", Y.constructParams));
  var ee = {
    enrichSuggestion: function enrichSuggestion(t, n) {
      var i = this,
          s = e.Deferred();
      if (!i.options.enrichmentEnabled || !i.type.enrichmentEnabled || !i.requestMode.enrichmentEnabled || n && n.dontEnrich) return s.resolve(t);
      if (t.data && null != t.data.qc) return s.resolve(t);
      i.disableDropdown();
      var o = i.type.getEnrichmentQuery(t),
          r = i.type.enrichmentParams,
          a = {
        noCallbacks: !0,
        useEnrichmentCache: !0,
        method: i.type.enrichmentMethod
      };
      return i.currentValue = o, i.enrichPhase = i.getSuggestions(o, r, a).always(function () {
        i.enableDropdown();
      }).done(function (e) {
        var n = e && e[0];
        s.resolve(n || t, !!n);
      }).fail(function () {
        s.resolve(t);
      }), s;
    },
    enrichResponse: function enrichResponse(t, n) {
      var i = this,
          s = i.enrichmentCache[n];
      s && e.each(t.suggestions, function (e, i) {
        if (i.value === n) return t.suggestions[e] = s, !1;
      });
    }
  };
  e.extend(r.prototype, ee);
  var te = {
    width: "auto",
    floating: !1
  },
      ne = {
    createContainer: function createContainer() {
      var t = this,
          n = "." + t.classes.suggestion,
          i = t.options,
          s = e("<div/>").addClass(i.containerClass).css({
        display: "none"
      });
      t.$container = s, s.on("click" + S, n, e.proxy(t.onSuggestionClick, t));
    },
    showContainer: function showContainer() {
      this.$container.appendTo(this.options.floating ? this.$body : this.$wrapper);
    },
    getContainer: function getContainer() {
      return this.$container.get(0);
    },
    removeContainer: function removeContainer() {
      var e = this;
      e.options.floating && e.$container.remove();
    },
    setContainerOptions: function setContainerOptions() {
      var t = this;
      t.$container.off("mousedown.suggestions"), t.options.floating && t.$container.on("mousedown.suggestions", e.proxy(t.onMousedown, t));
    },
    onSuggestionClick: function onSuggestionClick(t) {
      var n,
          i = this,
          s = e(t.target);

      if (!i.dropdownDisabled) {
        for (i.cancelFocus = !0, i.el.focus(); s.length && !(n = s.attr("data-index"));) {
          s = s.closest("." + i.classes.suggestion);
        }

        n && !isNaN(n) && i.select(+n);
      }
    },
    getSuggestionsItems: function getSuggestionsItems() {
      return this.$container.children("." + this.classes.suggestion);
    },
    toggleDropdownEnabling: function toggleDropdownEnabling(e) {
      this.dropdownDisabled = !e, this.$container.attr("disabled", !e);
    },
    disableDropdown: function disableDropdown() {
      this.toggleDropdownEnabling(!1);
    },
    enableDropdown: function enableDropdown() {
      this.toggleDropdownEnabling(!0);
    },
    hasSuggestionsToChoose: function hasSuggestionsToChoose() {
      var t = this;
      return t.suggestions.length > 1 || 1 === t.suggestions.length && (!t.selection || e.trim(t.suggestions[0].value) !== e.trim(t.selection.value));
    },
    suggest: function suggest() {
      var t = this,
          n = t.options,
          i = [];

      if (t.requestMode.userSelect) {
        if (t.hasSuggestionsToChoose()) n.hint && t.suggestions.length && i.push('<div class="' + t.classes.hint + '">' + n.hint + "</div>"), t.selectedIndex = -1, t.suggestions.forEach(function (e, n) {
          e == t.selection && (t.selectedIndex = n), t.buildSuggestionHtml(e, n, i);
        });else {
          if (t.suggestions.length) return void t.hide();
          var s = t.getNoSuggestionsHint();
          if (!s) return void t.hide();
          i.push('<div class="' + t.classes.hint + '">' + s + "</div>");
        }
        i.push('<div class="' + x.promo + '"></div>'), i.push("</div>"), t.$container.html(i.join("")), n.autoSelectFirst && -1 === t.selectedIndex && (t.selectedIndex = 0), -1 !== t.selectedIndex && t.getSuggestionsItems().eq(t.selectedIndex).addClass(t.classes.selected), e.isFunction(n.beforeRender) && n.beforeRender.call(t.element, t.$container), t.$container.show(), t.visible = !0;
      }
    },
    buildSuggestionHtml: function buildSuggestionHtml(e, t, n) {
      n.push('<div class="' + this.classes.suggestion + '" data-index="' + t + '">');
      var i = this.options.formatResult || this.type.formatResult || this.formatResult;
      n.push(i.call(this, e.value, this.currentValue, e, {
        unformattableTokens: this.type.unformattableTokens
      }));
      var s = this.makeSuggestionLabel(this.suggestions, e);
      s && n.push('<span class="' + this.classes.subtext_label + '">' + V.escapeHtml(s) + "</span>"), n.push("</div>");
    },
    wrapFormattedValue: function wrapFormattedValue(e, t) {
      var n = this,
          i = V.getDeepValue(t.data, "state.status");
      return '<span class="' + n.classes.value + '"' + (i ? ' data-suggestion-status="' + i + '"' : "") + ">" + e + "</span>";
    },
    formatResult: function formatResult(e, t, n, i) {
      var s = this;
      return e = s.highlightMatches(e, t, n, i), s.wrapFormattedValue(e, n);
    },
    highlightMatches: function highlightMatches(t, n, i, s) {
      var o,
          r,
          a,
          u,
          d,
          f,
          p,
          g = this,
          h = [],
          y = s && s.unformattableTokens,
          m = s && s.maxLength,
          _ = V.reWordExtractor();

      if (!t) return "";

      for (o = k.tokenize(n, y), r = e.map(o, function (e) {
        return new RegExp("^((.*)([\\-\\+\\\\\\?!@#$%^&]+))?(" + V.escapeRegExChars(e) + ")([^\\-\\+\\\\\\?!@#$%^&]*[\\-\\+\\\\\\?!@#$%^&]*)", "i");
      }); (a = _.exec(t)) && a[0];) {
        u = a[1], h.push({
          text: u,
          hasUpperCase: u.toLowerCase() !== u,
          formatted: V.formatToken(u),
          matchable: !0
        }), a[2] && h.push({
          text: a[2]
        });
      }

      for (d = 0; d < h.length; d++) {
        f = h[d], !f.matchable || f.matched || -1 !== e.inArray(f.formatted, y) && !f.hasUpperCase || e.each(r, function (e, t) {
          var n,
              i = t.exec(f.formatted),
              s = d + 1;
          if (i) return i = {
            before: i[1] || "",
            beforeText: i[2] || "",
            beforeDelimiter: i[3] || "",
            text: i[4] || "",
            after: i[5] || ""
          }, i.before && (h.splice(d, 0, {
            text: f.text.substr(0, i.beforeText.length),
            formatted: i.beforeText,
            matchable: !0
          }, {
            text: i.beforeDelimiter
          }), s += 2, n = i.before.length, f.text = f.text.substr(n), f.formatted = f.formatted.substr(n), d--), n = i.text.length + i.after.length, f.formatted.length > n && (h.splice(s, 0, {
            text: f.text.substr(n),
            formatted: f.formatted.substr(n),
            matchable: !0
          }), f.text = f.text.substr(0, n), f.formatted = f.formatted.substr(0, n)), i.after && (n = i.text.length, h.splice(s, 0, {
            text: f.text.substr(n),
            formatted: f.formatted.substr(n)
          }), f.text = f.text.substr(0, n), f.formatted = f.formatted.substr(0, n)), f.matched = !0, !1;
        });
      }

      if (m) {
        for (d = 0; d < h.length && m >= 0; d++) {
          f = h[d], (m -= f.text.length) < 0 && (f.text = f.text.substr(0, f.text.length + m) + "...");
        }

        h.length = d;
      }

      return p = l(h), c(p, g.classes.nowrap);
    },
    makeSuggestionLabel: function makeSuggestionLabel(t, n) {
      var i,
          s,
          o = this,
          r = o.type.fieldNames,
          a = {},
          u = V.reWordExtractor(),
          l = [];

      if (r && d(t, n) && n.data && (e.each(r, function (e) {
        var t = n.data[e];
        t && (a[e] = V.formatToken(t));
      }), !e.isEmptyObject(a))) {
        for (; (i = u.exec(V.formatToken(n.value))) && (s = i[1]);) {
          e.each(a, function (e, t) {
            if (t == s) return l.push(r[e]), delete a[e], !1;
          });
        }

        if (l.length) return l.join(", ");
      }
    },
    hide: function hide() {
      var e = this;
      e.visible = !1, e.selectedIndex = -1, e.$container.hide().empty();
    },
    activate: function activate(e) {
      var t,
          n,
          i = this,
          s = i.classes.selected;
      return !i.dropdownDisabled && (n = i.getSuggestionsItems(), n.removeClass(s), i.selectedIndex = e, -1 !== i.selectedIndex && n.length > i.selectedIndex) ? (t = n.eq(i.selectedIndex), t.addClass(s), t) : null;
    },
    deactivate: function deactivate(e) {
      var t = this;
      t.dropdownDisabled || (t.selectedIndex = -1, t.getSuggestionsItems().removeClass(t.classes.selected), e && t.el.val(t.currentValue));
    },
    moveUp: function moveUp() {
      var e = this;
      if (!e.dropdownDisabled) return -1 === e.selectedIndex ? void (e.suggestions.length && e.adjustScroll(e.suggestions.length - 1)) : 0 === e.selectedIndex ? void e.deactivate(!0) : void e.adjustScroll(e.selectedIndex - 1);
    },
    moveDown: function moveDown() {
      var e = this;
      if (!e.dropdownDisabled) return e.selectedIndex === e.suggestions.length - 1 ? void e.deactivate(!0) : void e.adjustScroll(e.selectedIndex + 1);
    },
    adjustScroll: function adjustScroll(e) {
      var t,
          n,
          i,
          s = this,
          o = s.activate(e),
          r = s.$container.scrollTop();
      o && o.length && (t = o.position().top, t < 0 ? s.$container.scrollTop(r + t) : (n = t + o.outerHeight(), i = s.$container.innerHeight(), n > i && s.$container.scrollTop(r - i + n)), s.el.val(s.suggestions[e].value));
    }
  };
  e.extend(L, te), e.extend(r.prototype, ne), U.on("initialize", ne.createContainer).on("dispose", ne.removeContainer).on("setOptions", ne.setContainerOptions).on("ready", ne.showContainer).on("assignSuggestions", ne.suggest);

  var ie = {
    constraints: null,
    restrict_value: !1
  },
      se = ["country_iso_code", "region_iso_code", "region_fias_id", "area_fias_id", "city_fias_id", "city_district_fias_id", "settlement_fias_id", "planning_structure_fias_id", "street_fias_id"],
      oe = function oe(e, t) {
    var n,
        i,
        s = this,
        o = {};
    s.instance = t, s.fields = {}, s.specificity = -1, y.isPlainObject(e) && t.type.dataComponents && m.each(t.type.dataComponents, function (t, n) {
      var i = t.id;
      t.forLocations && e[i] && (s.fields[i] = e[i], s.specificity = n);
    }), n = Object.keys(s.fields), i = m.intersect(n, se), i.length ? (m.each(i, function (e, t) {
      o[e] = s.fields[e];
    }), s.fields = o, s.specificity = s.getFiasSpecificity(i)) : s.fields.kladr_id && (s.fields = {
      kladr_id: s.fields.kladr_id
    }, s.significantKladr = p(s.fields.kladr_id), s.specificity = s.getKladrSpecificity(s.significantKladr));
  };

  B.extend(oe.prototype, {
    getLabel: function getLabel() {
      return this.instance.type.composeValue(this.fields, {
        saveCityDistrict: !0
      });
    },
    getFields: function getFields() {
      return this.fields;
    },
    isValid: function isValid() {
      return !y.isEmptyObject(this.fields);
    },
    getKladrSpecificity: function getKladrSpecificity(e) {
      var t = -1,
          n = e.length;
      return m.each(this.instance.type.dataComponents, function (e, i) {
        e.kladrFormat && n === e.kladrFormat.digits && (t = i);
      }), t;
    },
    getFiasSpecificity: function getFiasSpecificity(e) {
      var t = -1;
      return m.each(this.instance.type.dataComponents, function (n, i) {
        n.fiasType && e.indexOf(n.fiasType) > -1 && t < i && (t = i);
      }), t;
    },
    containsData: function containsData(e) {
      var t = !0;
      return this.fields.kladr_id ? !!e.kladr_id && 0 === e.kladr_id.indexOf(this.significantKladr) : (m.each(this.fields, function (n, i) {
        return t = !!e[i] && e[i].toLowerCase() === n.toLowerCase();
      }), t);
    }
  }), r.ConstraintLocation = oe;

  var re = function re(e, t) {
    this.id = j("c"), this.deletable = !!e.deletable, this.instance = t;
    var n = m.makeArray(e && (e.locations || e.restrictions));
    this.locations = n.map(function (e) {
      return new oe(e, t);
    }), this.locations = this.locations.filter(function (e) {
      return e.isValid();
    }), this.label = e.label, null == this.label && t.type.composeValue && (this.label = this.locations.map(function (e) {
      return e.getLabel();
    }).join(", "));
  };

  B.extend(re.prototype, {
    isValid: function isValid() {
      return this.locations.length > 0;
    },
    getFields: function getFields() {
      return this.locations.map(function (e) {
        return e.getFields();
      });
    }
  });
  var ae = {
    createConstraints: function createConstraints() {
      this.constraints = {};
    },
    setupConstraints: function setupConstraints() {
      var e,
          t = this,
          n = t.options.constraints;
      if (!n) return void t.unbindFromParent();
      B.isJqObject(n) || "string" == typeof n || "number" == typeof n.nodeType ? (e = B.select(n), e.is(t.constraints) || (t.unbindFromParent(), e.is(t.el) || (t.constraints = e, t.bindToParent()))) : (m.each(t.constraints, function (e, n) {
        t.removeConstraint(n);
      }), m.each(m.makeArray(n), function (e, n) {
        t.addConstraint(e);
      }));
    },
    filteredLocation: function filteredLocation(e) {
      var t = [],
          n = {};
      if (m.each(this.type.dataComponents, function () {
        this.forLocations && t.push(this.id);
      }), y.isPlainObject(e) && m.each(e, function (e, i) {
        e && t.indexOf(i) >= 0 && (n[i] = e);
      }), !y.isEmptyObject(n)) return n.kladr_id ? {
        kladr_id: n.kladr_id
      } : n;
    },
    addConstraint: function addConstraint(e) {
      var t = this;
      e = new re(e, t), e.isValid() && (t.constraints[e.id] = e);
    },
    removeConstraint: function removeConstraint(e) {
      delete this.constraints[e];
    },
    constructConstraintsParams: function constructConstraintsParams() {
      for (var e, t, n = this, i = [], s = n.constraints, o = {}; B.isJqObject(s) && (e = s.suggestions()) && !(t = v.getDeepValue(e, "selection.data"));) {
        s = e.constraints;
      }

      return B.isJqObject(s) ? (t = new oe(t, e).getFields()) && (n.bounds.own.indexOf("city") > -1 && delete t.city_fias_id, o.locations = [t], o.restrict_value = !0) : s && (m.each(s, function (e, t) {
        i = i.concat(e.getFields());
      }), i.length && (o.locations = i, o.restrict_value = n.options.restrict_value)), o;
    },
    getFirstConstraintLabel: function getFirstConstraintLabel() {
      var e = this,
          t = y.isPlainObject(e.constraints) && Object.keys(e.constraints)[0];
      return t ? e.constraints[t].label : "";
    },
    bindToParent: function bindToParent() {
      var e = this;
      e.constraints.on(["suggestions-select." + e.uniqueId, "suggestions-invalidateselection." + e.uniqueId, "suggestions-clear." + e.uniqueId].join(" "), B.proxy(e.onParentSelectionChanged, e)).on("suggestions-dispose." + e.uniqueId, B.proxy(e.onParentDispose, e));
    },
    unbindFromParent: function unbindFromParent() {
      var e = this,
          t = e.constraints;
      B.isJqObject(t) && t.off("." + e.uniqueId);
    },
    onParentSelectionChanged: function onParentSelectionChanged(e, t, n) {
      ("suggestions-select" !== e.type || n) && this.clear();
    },
    onParentDispose: function onParentDispose(e) {
      this.unbindFromParent();
    },
    getParentInstance: function getParentInstance() {
      return B.isJqObject(this.constraints) && this.constraints.suggestions();
    },
    shareWithParent: function shareWithParent(e) {
      var t = this.getParentInstance();
      t && t.type === this.type && !f(e, t) && (t.shareWithParent(e), t.setSuggestion(e));
    },
    getUnrestrictedData: function getUnrestrictedData(e) {
      var t = this,
          n = [],
          i = {},
          s = -1;
      return m.each(t.constraints, function (t, n) {
        m.each(t.locations, function (t, n) {
          t.containsData(e) && t.specificity > s && (s = t.specificity);
        });
      }), s >= 0 ? (e.region_kladr_id && e.region_kladr_id === e.city_kladr_id && n.push.apply(n, t.type.dataComponentsById.city.fields), m.each(t.type.dataComponents.slice(0, s + 1), function (e, t) {
        n.push.apply(n, e.fields);
      }), m.each(e, function (e, t) {
        -1 === n.indexOf(t) && (i[t] = e);
      })) : i = e, i;
    }
  };
  B.extend(L, ie), B.extend(r.prototype, ae), "GET" != T.getDefaultType() && U.on("initialize", ae.createConstraints).on("setOptions", ae.setupConstraints).on("requestParams", ae.constructConstraintsParams).on("dispose", ae.unbindFromParent);
  var ue = {
    proceedQuery: function proceedQuery(e) {
      var t = this;
      e.length >= t.options.minChars ? t.updateSuggestions(e) : t.hide();
    },
    selectCurrentValue: function selectCurrentValue(e) {
      var t = this,
          n = B.Deferred();
      return t.inputPhase.resolve(), t.fetchPhase.done(function () {
        var i;
        t.selection && !t.visible ? n.reject() : (i = t.findSuggestionIndex(), t.select(i, e), -1 === i ? n.reject() : n.resolve(i));
      }).fail(function () {
        n.reject();
      }), n;
    },
    selectFoundSuggestion: function selectFoundSuggestion() {
      var e = this;
      e.requestMode.userSelect || e.select(0);
    },
    findSuggestionIndex: function findSuggestionIndex() {
      var e,
          t = this,
          n = t.selectedIndex;
      return -1 === n && (e = t.el.val().trim()) && t.type.matchers.some(function (i) {
        return -1 !== (n = i(e, t.suggestions));
      }), n;
    },
    select: function select(e, t) {
      var n,
          i = this,
          s = i.suggestions[e],
          o = t && t.continueSelecting,
          r = i.currentValue;

      if (!i.triggering.Select) {
        if (!s) return o || i.selection || i.triggerOnSelectNothing(), void i.onSelectComplete(o);
        n = i.hasSameValues(s), i.enrichSuggestion(s, t).done(function (s, o) {
          var a = B.extend({
            hasBeenEnriched: o,
            hasSameValues: n
          }, t);
          i.selectSuggestion(s, e, r, a);
        });
      }
    },
    selectSuggestion: function selectSuggestion(e, t, n, i) {
      var s = this,
          o = i.continueSelecting,
          r = !s.type.isDataComplete || s.type.isDataComplete.call(s, e),
          a = s.selection;
      s.triggering.Select || (s.type.alwaysContinueSelecting && (o = !0), r && (o = !1), i.hasBeenEnriched && s.suggestions[t] && (s.suggestions[t].data = e.data), s.requestMode.updateValue && (s.checkValueBounds(e), s.currentValue = s.getSuggestionValue(e, i), !s.currentValue || i.noSpace || r || (s.currentValue += " "), s.el.val(s.currentValue)), s.currentValue ? (s.selection = e, s.areSuggestionsSame(e, a) || s.trigger("Select", e, s.currentValue != n), s.requestMode.userSelect && s.onSelectComplete(o)) : (s.selection = null, s.triggerOnSelectNothing()), s.shareWithParent(e));
    },
    onSelectComplete: function onSelectComplete(e) {
      var t = this;
      e ? (t.selectedIndex = -1, t.updateSuggestions(t.currentValue)) : t.hide();
    },
    triggerOnSelectNothing: function triggerOnSelectNothing() {
      var e = this;
      e.triggering.SelectNothing || e.trigger("SelectNothing", e.currentValue);
    },
    trigger: function trigger(e) {
      var t = this,
          n = V.slice(arguments, 1),
          i = t.options["on" + e];
      t.triggering[e] = !0, V.isFunction(i) && i.apply(t.element, n), t.el.trigger.call(t.el, "suggestions-" + e.toLowerCase(), n), t.triggering[e] = !1;
    }
  };
  B.extend(r.prototype, ue), U.on("assignSuggestions", ue.selectFoundSuggestion);
  var le = {
    bounds: null
  },
      ce = {
    setupBounds: function setupBounds() {
      this.bounds = {
        from: null,
        to: null
      };
    },
    setBoundsOptions: function setBoundsOptions() {
      var t,
          n,
          i = this,
          s = [],
          o = e.trim(i.options.bounds).split("-"),
          r = o[0],
          a = o[o.length - 1],
          u = [],
          l = [];
      i.type.dataComponents && e.each(i.type.dataComponents, function () {
        this.forBounds && s.push(this.id);
      }), -1 === e.inArray(r, s) && (r = null), n = e.inArray(a, s), -1 !== n && n !== s.length - 1 || (a = null), (r || a) && (t = !r, e.each(s, function (e, n) {
        if (n == r && (t = !0), l.push(n), t && u.push(n), n == a) return !1;
      })), i.bounds.from = r, i.bounds.to = a, i.bounds.all = l, i.bounds.own = u;
    },
    constructBoundsParams: function constructBoundsParams() {
      var e = this,
          t = {};
      return e.bounds.from && (t.from_bound = {
        value: e.bounds.from
      }), e.bounds.to && (t.to_bound = {
        value: e.bounds.to
      }), t;
    },
    checkValueBounds: function checkValueBounds(e) {
      var t,
          n = this;

      if (n.bounds.own.length && n.type.composeValue) {
        var i = n.bounds.own.slice(0);
        1 === i.length && "city_district" === i[0] && i.push("city_district_fias_id"), t = n.copyDataComponents(e.data, i), e.value = n.type.composeValue(t);
      }
    },
    copyDataComponents: function copyDataComponents(t, n) {
      var i = {},
          s = this.type.dataComponentsById;
      return s && e.each(n, function (n, o) {
        e.each(s[o].fields, function (e, n) {
          null != t[n] && (i[n] = t[n]);
        });
      }), i;
    },
    getBoundedKladrId: function getBoundedKladrId(t, n) {
      var i,
          s = n[n.length - 1];
      return e.each(this.type.dataComponents, function (e, t) {
        if (t.id === s) return i = t.kladrFormat, !1;
      }), t.substr(0, i.digits) + new Array((i.zeros || 0) + 1).join("0");
    }
  };
  e.extend(L, le), e.extend(r.prototype, ce), U.on("initialize", ce.setupBounds).on("setOptions", ce.setBoundsOptions).on("requestParams", ce.constructBoundsParams);
  var de = {
    selectByClass: function selectByClass(e, t) {
      var n = "." + e;
      return t ? t.querySelector(n) : document.querySelector(n);
    },
    addClass: function addClass(e, t) {
      var n = e.className.split(" ");
      -1 === n.indexOf(t) && n.push(t), e.className = n.join(" ");
    },
    setStyle: function setStyle(e, t, n) {
      e.style[t] = n;
    },
    listenTo: function listenTo(e, t, n, i) {
      e.addEventListener(t, i, !1), n && (eventsByNamespace[n] || (eventsByNamespace[n] = []), eventsByNamespace[n].push({
        eventName: t,
        element: e,
        callback: i
      }));
    },
    stopListeningNamespace: function stopListeningNamespace(e) {
      var t = eventsByNamespace[e];
      t && t.forEach(function (e) {
        e.element.removeEventListener(e.eventName, e.callback, !1);
      });
    }
  };
  g.prototype.show = function () {
    "FREE" === this.plan && this.element && (this.setStyles(), this.setHtml());
  }, g.prototype.setStyles = function () {
    this.element.style.display = "block";
  }, g.prototype.setHtml = function () {
    this.element.innerHTML = '<a target="_blank" tabindex="-1" href="https://dadata.ru/suggestions/?utm_source=dadata&utm_medium=module&utm_campaign=suggestions-jquery"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.55 38.92"><defs><style>.cls-1{fill:#cdcccc;}.cls-2{fill:#ef4741;}.cls-3{fill:#fff;}</style></defs><title>dadata-logo</title><path class="cls-1" d="M192.61,153.07H196v-3.15h-3.39Zm9.55-14.46v-2.45h-3v16.91h3.14V142.2a4.39,4.39,0,0,1,4.23-3.7h1.75v-2.69h-1.54C203.75,135.81,202.35,137.76,202.16,138.61Zm20.2-2.45v11.3a5,5,0,0,1-4.65,3.66,7.19,7.19,0,0,1-2-.23,2,2,0,0,1-1.12-.6,2.38,2.38,0,0,1-.44-.86,4.38,4.38,0,0,1-.1-1V136.16h-3.14v12.4a4.83,4.83,0,0,0,1.26,3.65q1.26,1.21,4.61,1.21c3.38,0,4.62-.91,5.56-2.34v2h3.14V136.16Z" transform="translate(-57.96 -122.27)"/><rect class="cls-2" width="131.91" height="38.92" rx="3" ry="3"/><path class="cls-3" d="M119.34,130.39h-9.18v22.68h10.23c3.84,0,10.18-.35,10.18-6.88v-8.91C130.56,130.74,123.18,130.39,119.34,130.39Zm5.77,15.2c0,3.27-2.38,3.6-5.09,3.6h-4.41V134.27H119c2.71,0,6.14.33,6.14,3.6Zm-48-15.2H68v22.68H78.18c3.84,0,10.18-.35,10.18-6.88v-8.91C88.36,130.74,81,130.39,77.14,130.39Zm5.77,15.2c0,3.27-2.38,3.6-5.09,3.6H73.41V134.27h3.36c2.71,0,6.14.33,6.14,3.6Zm74-14.32h-5.1V148a6.28,6.28,0,0,0,.4,2.36,4,4,0,0,0,1,1.54,4.56,4.56,0,0,0,1.57.88,8.16,8.16,0,0,0,1.85.42q.89.08,2.08.09a24.23,24.23,0,0,0,2.83-.17v-2.87h-1.82a3.08,3.08,0,0,1-2.31-.61,3.79,3.79,0,0,1-.52-2.36V139h4.65v-3.14h-4.65Zm21,5.68q-1.82-1.14-6.5-1.13h-5.92v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.37,2.37,0,0,1,.72,2v1.15H168.9q-3,0-4.12,1.17T163.62,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.76,0,3.45-.83,3.45-2.82v-8.81Q179.73,138.08,177.91,136.94Zm-3.29,13.3h-3.35a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Zm-27.5-13.3q-1.82-1.14-6.5-1.13h-5.92v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.38,2.38,0,0,1,.72,2v1.15h-5.73q-3,0-4.12,1.17T132.84,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.77,0,3.45-.83,3.45-2.82v-8.81Q148.94,138.08,147.13,136.94Zm-3.28,13.3h-3.35a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Zm-38.92-13.3q-1.82-1.14-6.5-1.13H92.5v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.38,2.38,0,0,1,.72,2v1.15H95.91q-3,0-4.12,1.17T90.63,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.77,0,3.45-.83,3.45-2.82v-8.81Q106.74,138.08,104.92,136.94Zm-3.28,13.3H98.29a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Z" transform="translate(-57.96 -122.27)"/></svg></a>';
  }, U.on("assignSuggestions", h), r.defaultOptions = L, r.version = "20.3.0", e.Suggestions = r, e.fn.suggestions = function (t, n) {
    return 0 === arguments.length ? this.first().data("suggestions") : this.each(function () {
      var i = e(this),
          s = i.data("suggestions");
      "string" == typeof t ? s && "function" == typeof s[t] && s[t](n) : (s && s.dispose && s.dispose(), s = new r(this, t), i.data("suggestions", s));
    });
  };
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "%modules%/header/header";
// import "%modules%/video/video";
// import "%modules%/menu/menu";
// import "%modules%/popup-catalog/popup-catalog";
// import "%modules%/footer/footer";

/* home */
// import "%modules%/banner-home/banner-home";
// import "%modules%/slider-home/slider-home";
// import "%modules%/product-slider-home/product-slider-home";
// import "%modules%/catalog/minicard/minicard";
// import "%modules%/catalog/similar-product/similar-product";
// import "%modules%/top-brands/top-brands";

/* catalog */
// import "%modules%/catalog/catalog-filter/catalog-filter";

/* card */
// import "%modules%/card-moreinfo/card-moreinfo";
// import "%modules%/cart-similar/cart-similar";
// import "%modules%/mapsfilter/mapsfilter";
// import "%modules%/card-callback/card-callback";

/* popup */
// import "%modules%/right-popup/right-popup";
// import "%modules%/form-login/form-login";
// import "%modules%/basket/basketcard/basketcard";

/* basket */
// import "%modules%/basket/basket-aside/basket-aside";
// import "%modules%/mobile-menu-button/mobile-menu-button";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svg4everybody/dist/svg4everybody.js */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/jquery.fancybox.min */ "./src/js/import/jquery.fancybox.min.js");
/* harmony import */ var _import_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inputmask/dist/jquery.inputmask */ "./node_modules/inputmask/dist/jquery.inputmask.js");
/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _import_jquery_suggestions_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/jquery.suggestions.min */ "./src/js/import/jquery.suggestions.min.js");
/* harmony import */ var _import_jquery_suggestions_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_import_jquery_suggestions_min__WEBPACK_IMPORTED_MODULE_7__);




_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_3__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_3__["Thumbs"], swiper__WEBPACK_IMPORTED_MODULE_3__["Autoplay"]]);





window.onload = function () {
  document.querySelector('body').classList.add('page-loaded');
};

jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
  var ua = navigator.userAgent;

  if (/Chrome/i.test(ua)) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('html').addClass('chrome-navbar');
  }

  if (/Safari/i.test(ua)) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('html').addClass('safari-navbar');
  }
  /* init inputmask */


  function initInputMask() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("input[type=tel]").inputmask({
      mask: '+7(999) 999-99-99',
      showMaskOnHover: false,
      oncomplete: function oncomplete(elem) {
        elem.target.setAttribute('area-valid', 'true');
      },
      onincomplete: function onincomplete(elem) {
        elem.target.setAttribute('area-valid', 'false');
      },
      oncleared: function oncleared(elem) {
        elem.target.removeAttribute('area-valid');
      },
      onKeyValidation: function onKeyValidation(elem) {
        console.log(elem);
      }
    });
  }

  initInputMask();
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.select-digit a', function () {
    var summ = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).text();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('form').find('input').val(summ);
  });
  /*mobile menu*/

  function mobileMenu() {
    this.buttonElem = '.burger';
    this.menuElem = '.personal-layout__aside';
    this.iconMenu = 'ic_menu';
    this.iconClose = 'ic_close';

    this.onOpen = function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.buttonElem + '').toggleClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.buttonElem + '').parent().toggleClass('open-parent');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.menuElem + '').toggleClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').append('<div class="mobile-bg" ></div>');
      return true;
    };

    this.onClose = function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.buttonElem + '').removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.menuElem + '').removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('' + this.buttonElem + '').parent().removeClass('open-parent');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mobile-bg').remove();
    };
  }

  var mobileMenu = new mobileMenu();
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.burger', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.burger').hasClass('open')) {
      mobileMenu.onClose();
    } else {
      mobileMenu.onOpen();
    } // $(this).toggleClass('open')
    // $(this).parent().toggleClass('open-parent')
    // $('.personal-layout__aside').toggleClass('open')

  }); //закрыть при клике вне

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', function (e) {
    var div = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".burger, .personal-layout__aside"); //класс элемента вне которого клик

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      //закрыть popup
      //   if ($('.burger').hasClass('open')) {
      //     $('.personal-layout__aside').remove('open')
      //     $('.burger').toggleClass('open')
      //   }
      mobileMenu.onClose();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.close-fancybox .btn', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.close();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('submit', '#send-support', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('input').each(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).val() == '') {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.input-primary').addClass('empty-field');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.input-primary').removeClass('empty-field');
      }
    });

    if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.empty-field').length) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.open({
        type: 'ajax',
        src: '_modal-success.html'
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-edit-name]', function (event) {
    var name = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('edit-name');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-edit-name=' + name + ']').toggleClass('open');
  }); //тип заявки

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('change', '#change-type-order select', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__tabitem').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#order-select-' + jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).val() + '').addClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.form__add a', function (event) {
    event.preventDefault();
    var form = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__list-item'); // не более 3х контактов

    if (form.length < 4) {
      //добавляем новый элемент
      form.last().after(function () {
        return form.first().clone();
      }); //присваиваем уникальный name

      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__list-item').each(function (index, elem) {
        if (index) {
          var $containerIndex = index;
          var $conatiner = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('select').not('.change');
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.form__label').hide();
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.form__subitem').not('.change').append('<div class=""><a href="#" class="remove-item" ></a></div>').addClass('change');
          $conatiner.each(function (index, elem) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('name', jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('name') + '_' + $containerIndex).addClass('change');
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__add').hide();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.form__add2 a', function (event) {
    event.preventDefault();
    var form = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__list-item2'); // не более 3х контактов

    if (form.length < 4) {
      //добавляем новый элемент
      form.last().after(function () {
        return form.first().clone();
      }); //присваиваем уникальный name

      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__list-item2').each(function (index, elem) {
        if (index) {
          var $containerIndex = index;
          var $conatiner = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('input').not('.change');
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.form__label').hide();
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.form__subitem').not('.change').find('input').val('');
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.form__subitem').not('.change').append('<div class=""><a href="#" class="remove-item" ></a></div>').addClass('change');
          $conatiner.each(function (index, elem) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('name', jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('name') + '_' + $containerIndex).addClass('change');
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__add2').hide();
    }
  }); //delete

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.remove-item', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.form__list-item').remove();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.form__list-item2').remove();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__add').show();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.form__add2').show();
    event.preventDefault();
  });
  /* 
  =====================================================
  select in map
  =====================================================
  */

  function selectInMap() {
    var mapsParamsSelect = [{
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
          suppressMapOpenBlock: true
        });
        var PlacemarkArr = [];

        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() <= 580) {
          var showBaloonMode = false;
          var ballonPane = 'balloon';
          var ballonMapArea = 'Infinity';
        } else {
          var showBaloonMode = false;
          var ballonPane = 'placemark';
          var ballonMapArea = 0;
        } // Создание метки с пользовательским макетом балуна.


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
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('#address-in-map input').val(cord);
          jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.close();
        });
        myMapSelect.geoObjects.add(selectPlacemark); //центрируем метку

        myMapSelect.events.add('actiontick', function (e) {
          var current_state = myMapSelect.action.getCurrentState();
          var geoCenter = myMapSelect.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
          selectPlacemark.geometry.setCoordinates(geoCenter);
        });
        myMapSelect.events.add('boundschange', function (e) {
          var current_state = myMapSelect.action.getCurrentState();
          var geoCenter = myMapSelect.options.get('projection').fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
          selectPlacemark.geometry.setCoordinates(geoCenter);
        }); //autoscale
        //myMapSelect.setBounds(myMapSelect.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 });
      } catch (_unused) {
        console.log('error: maps-container select');
      }
    });
  }

  function selectLocationMap() {
    var mapsParamsSelect = [{
      'pin': [55.74481370529173, 37.67514980332959],
      'url': '/_balloon-add-parking-8.html',
      'icon': '/img/svg/ic_pin-parking.svg'
    }];
    ymaps.ready(function () {
      try {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() <= 580) {
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
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
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
              circle = new ymaps.Circle([[55.74481370529173, 37.67514980332959], 300], {}, {
            fillColor: "rgba(226,36,60,0.1)",
            strokeColor: "#E2243C",
            strokeOpacity: 0.8,
            strokeWidth: 3,
            draggable: false
          });
          myPlacemark.events.add('click', function (e) {
            var cord = e.get('target').geometry.getCoordinates();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.required-address input').val(cord);
            jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.close();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.required-address').removeClass('required-address');
          });
          myMap.geoObjects.add(myPlacemark).add(circle);
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
        }); //myMapSelect.setBounds(myMapSelect.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 });
      } catch (_unused2) {
        console.log('error: maps-container select');
      }
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-select-inmap]', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.open({
      src: '<div id="maps-container-select" ></div>',
      type: 'inline',
      opts: {
        touch: false,
        afterShow: function afterShow(instance, current) {
          selectInMap();
        }
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.input-primary.input-icon a', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().addClass('required-address');
    jquery__WEBPACK_IMPORTED_MODULE_4___default.a.fancybox.open({
      src: '<div id="maps-container-select" ></div>',
      type: 'inline',
      opts: {
        touch: false,
        afterShow: function afterShow(instance, current) {
          selectLocationMap();
        }
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-fancybox]').fancybox({
    afterShow: function afterShow(instance, current) {}
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('focus', "#address-in-map input", function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).suggestions({
      token: "16606eb95053d3dd45c2d750025a934774edaf58",
      type: "ADDRESS",

      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect: function onSelect(suggestion) {
        console.log(suggestion);
      }
    });
  }); //alert('ee')

  /* выбор  */
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map