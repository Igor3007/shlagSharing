import $ from 'jquery';

$(document).ready(function () {
    $('.basket-aside__type input').on('change', function () {
        if ($(this).val() == 2) {
            $('.basket-aside__form').removeClass('hide');
            $('.basket-aside__button').hide();
        } else {
            $('.basket-aside__form').addClass('hide');
            $('.basket-aside__button').show();
        }
    });

    $('.basket-aside__title, .basket-aside__subtitle').on('click', function () {
        if ($(window).width() <= 767) {
            $(this).parents('.page-basket__aside').toggleClass('open');
        }
    });
});