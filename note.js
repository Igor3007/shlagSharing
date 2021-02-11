// ----------------- Contact Form запрет ввода симовлов --------------------- //
var $form = $('input[ type="tel"]');
if ($form.length) {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('input[ type="tel"]').addEventListener("keypress", function (evt) {
            if (evt.which != 8 &&
                evt.which != 32 &&
                evt.which != 43 &&
                evt.which != 45 &&
                evt.which != 41 && // )
                evt.which != 40 && // (
                evt.which != 44 &&
                evt.which != 107 &&
                evt.which != 188 &&
                evt.which != 189 &&
                evt.which != 0 &&
                evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
    })
}
// ----------------- END Contact Form запрет ввода симовлов --------------------- //


$(document).ready(function () {

    // ----------------- lightGallery --------------------- //
    $('#lightgallery').lightGallery({
        selector: '.item',
        dynamicEl: ['src', 'iframe', 'subHtml', 'thumb', 'poster', 'responsive', 'srcset', 'sizes']
    });
    $('#lightgallery-2').lightGallery({
        selector: '.item-2',
        dynamicEl: ['src', 'iframe', 'subHtml', 'thumb', 'poster', 'responsive', 'srcset', 'sizes']
    });
    // ----------------- END lightGallery --------------------- //

    // ----------------- Change svg to inline --------------------- //
    $('img.svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
    // ----------------- END Change svg to inline --------------------- //


    /* Вывод сообщений */
    function status(type_err, message) {
        if (type_err) {
            $('#status').removeClass().text(message).addClass('complete');
        } else {
            $('#status').removeClass().text(message).addClass('error');
        }

        setTimeout(function () { $('#status').removeClass(); }, 5000);

    };

    /* Слайдер на главной */
    var owl = $('.box-slider-home');

    owl.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        items: 1
    });

    $('.slide-next').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.slide-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    })

    /* Слайдер проектов на главной */
    var owlProjects = $('.box-our-projects.owl-carousel');

    owlProjects.owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        items: 4,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: false
            },
            760: {
                items: 3,
                nav: false
            },
            1440: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });




    $('.ic-next-slide').click(function () {
        owlProjects.trigger('next.owl.carousel');
    })


    /* view description slide */

    $('.view-desc').on('click', function () {

        $('.slide-info-desc').toggleClass('open');

    })

    /* Слайдер новостей на главной */

    var owlNews = $('.box-news-slider.owl-carousel');

    function owlNewsInit() {

        if (!owlNews.hasClass('owl-loaded')) {

            owlNews.owlCarousel({
                loop: true,
                dots: false,
                nav: false,
                responsiveClass: true,
                items: 3,
                margin: 70,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        margin: 0
                    },
                    580: {
                        items: 2,
                        nav: false,
                        margin: 30
                    },
                    950: {
                        items: 3,
                        nav: false,
                        margin: 40
                    },
                    1280: {
                        items: 3,
                        margin: 70
                    }
                }
            });

        }
    }

    owlNewsInit();


    $('.ic-next-slide-news').click(function () {
        owlNews.trigger('next.owl.carousel');
    })


    /*mobile menu*/

    $('.m-menu').on('click', function () {


        $(this).toggleClass('open');
        $('.header-nav').toggleClass('open');

        if ($(this).hasClass('open')) {
            $('.m-menu > span').removeClass('fa-bars').addClass('fa-times')
        } else {
            $('.m-menu > span').removeClass('fa-times').addClass('fa-bars')
        }
    })

    $('.header-nav li').on('click', function () {

        $('.header-nav, .m-menu').removeClass('open')
        $('.m-menu > span').removeClass('fa-times').addClass('fa-bars')


    })

    /* slider for servise */

    function sliderInit(type, elem) {

        switch (type) {
            case 'init':
                if (!elem.hasClass('owl-carousel')) {
                    elem.addClass('owl-carousel');
                    elem.owlCarousel({
                        loop: true,
                        dots: false,
                        nav: true,
                        responsiveClass: true,
                        items: 1
                    });
                }
                break;
            case 'destroy':
                if (elem.hasClass('owl-carousel')) {
                    elem.trigger('destroy.owl.carousel');
                    elem.removeClass('owl-carousel');
                }
                break;
        }

    }

    $(window).on('resize', function () {

        if ($(window).width() < 480) {
            owlNews.trigger('destroy.owl.carousel')  //destroy crousel news
            sliderInit('init', $('.box-services'))
        } else {
            sliderInit('destroy', $('.box-services'))
            owlNewsInit()
        }

    })

    if ($(window).width() < 480) {
        sliderInit('init', $('.box-services'))
        owlNews.trigger('destroy.owl.carousel')  //destroy crousel news
    }

    /*end slider for services*/

    $('.item-quest ').on('click', function () {
        $(this).toggleClass('open')
    })

    /* == story-feed company == */

    function setActiveElem(elem) {

        if (elem >= 0) {
            $('.wrap-story-feed > div').each(function (index) {
                if (index <= elem) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            })
        }


    }

    function setTextMain(elem) {
        if ($('.item-story').index(elem) >= 0) {
            $('.stage-info__year').text(elem.find('.story-year').text());
            $('.stage-info__area span').text(elem.find('.story-area').text());
            $('.stage-info-desc').text(elem.find('.story-line p').text());
        }

    }

    function scrollToElement(elem, container) {

        container.animate({
            scrollLeft: elem.offset().left - container.offset().left + container.scrollLeft() - (container.width() / 2) + (elem.width() / 2)
        });
    }


    /* story-feed company */
    function feedStory(elem) {

        var elem_index = $('.item-story').index(elem),         /*индекс текущего элемента*/
            elem_count = $('.wrap-story-feed > div').length,   /*кол-во элементов*/
            container = $('.box-story-feed'),                  /*Блок с элементами*/
            width_container = container.width(),                /*Шириша контейнера*/
            elem_width = elem.width()                          /*ширина текущего элемента*/

        $('.progress-bar-story').width(elem_count * elem_width)
        var left_item = (elem_width * (elem_index + 1)) - (elem_width / 2)  /* растояние от левого края до элем*/
        $('.progress').width(left_item)

        setActiveElem(elem_index);                             /*подсвечиваем все элем до ткущего как активные*/
        setTextMain(elem);                                     /*Меняем текст в основном блоке*/

        container.animate({
            scrollLeft: elem.offset().left - container.offset().left + container.scrollLeft() - (width_container / 2) + (elem_width / 2)
        });
    }

    /* == story-feed company == */


    /* click on elements */
    $('.item-story').on('click', function () {
        feedStory($(this));
    })

    /* next story */
    $('.right-nav').on('click', function () {
        var elem = $('.wrap-story-feed > .item-story.active').last().next()
        feedStory(elem)
    })

    /* back story */
    $('.left-nav').on('click', function () {
        var elem = $('.wrap-story-feed > .item-story.active').last().prev()
        feedStory(elem);
    })

    /*tabs */



    $(function () {

        $('.box-nav-tabs').on('click', 'li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.box-tabs').find('.item-tab').removeClass('active').eq($(this).index()).addClass('active');
            feedStory($('.item-story.active'))
            scrollToElement($(this), $('.box-nav-tabs'));
        });

    });

    /* animate wow js init */
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 200, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();


    /* contact form */


    $('#type-house').prop('checked', true);
    $('.contact-form-radio input').on('change', function () {

        switch ($(this).attr('id')) {

            case 'type-room':
                $('.type-room-box').hide();
                $('.type-room-box input').removeAttr('aria-required').val('-');
                break;

            case 'type-house':

                $('.type-room-box').show();
                $('.type-room-box input').attr('aria-required', true).val('');

                break;

        }

    })


}); //ready


// ----------------- AJAX --------------------- //
jQuery(function ($) {
    $('#filter select').change(function () {
        var filter = $('#filter');
        console.log('111');
        $.ajax({
            url: my_ajax_object.ajax_url,
            data: filter.serialize(),
            type: 'POST',
            success: function (data) {
                $('#response').html(data);
            }
        });
        return false;
    });
});

jQuery(function ($) {
    $('#filter-2 select').change(function () {
        var filter = $('#filter-2');
        console.log('111');
        $.ajax({
            url: my_ajax_object.ajax_url,
            data: filter.serialize(),
            type: 'POST',
            success: function (data) {
                $('#response').html(data);
            }
        });
        return false;
    });
});
jQuery(function ($) {
    $('#filter-3 select').change(function () {
        var filter = $('#filter-3');
        console.log('111');
        $.ajax({
            url: my_ajax_object.ajax_url,
            data: filter.serialize(),
            type: 'POST',
            success: function (data) {
                $('#response').html(data);
            }
        });
        return false;
    });
});

// ----------------- END AJAX --------------------- //

/* ====================== popup ========================== */

function open_modal(id_modal, header_modal) {

    $('#' + id_modal).addClass('open');
    $('body').addClass('hidden');

    if (header_modal) {
        $('.modal-wrap-content form').attr('data-type', header_modal);
    }
}

/* close modal */

function close_modal(id_modal) {

    if (id_modal) {
        $('#' + id_modal).removeClass('open');
    } else {
        $('.modal-window').removeClass('open');
    }

    $('body').removeClass('hidden');
}


$('.close-modal').on('click', function (event) {
    close_modal();
})

$(window).on('resize', function () {

    if ($(window).height() < $('.modal-window-content').height()) {
        $('.modal-window').addClass('top-fixed')
    } else {
        $('.modal-window').removeClass('top-fixed')
    }

})

/* ====================== popup ========================== */


$('.open-callback').on('click', function () {
    open_modal('modal-callback');
})

