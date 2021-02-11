import noUiSlider from 'nouislider/distribute/nouislider.min';

import $ from 'jquery';

if(document.getElementById('slider-price')){
    
    const handlesSlider = document.getElementById('slider-price');
    const startSider = handlesSlider.getAttribute('data-nouislider-start').split(',');
    const rangeSider = handlesSlider.getAttribute('data-nouislider-range').split(',');

    noUiSlider.create(handlesSlider, {
        start: startSider,
        connect: true,
        step: 100,
        range: {
            'min': [Number(rangeSider[0])],
            'max': [Number(rangeSider[1])]
        }
    });

    handlesSlider.noUiSlider.on('update', function (values, handle) {
        const res = handlesSlider.noUiSlider.get()

        document.querySelector('#min-price').innerText = Number(res[0])
        document.querySelector('#max-price').innerText = Number(res[1])

        document.querySelector('#price-start').value = Number(res[0])
        document.querySelector('#price-end').value = Number(res[1])
    });

    /* button view all */

    document.querySelector('.catalog-filter-checkbox__all').addEventListener('click', (elem)=>{
        if(elem.target.parentElement.children[0].classList.toggle('open') ){
            elem.target.innerText = 'Свернуть';
        }else{
            elem.target.innerText = 'Показать все';
        }
    })
    
}

$(document).ready(function () {
    $('.catalog-filter__main input').on('change', function () {
        
        const widhtElem = $(this).parent().width();
        const left = $(this).parent().offset().left + (widhtElem > 200 ? widhtElem : 200)
        const top = $(this).parent().offset().top - 22

        $('.float-send-filter').css({
            'left': left + 'px',
            'top': top + 'px'
        }).addClass('active')
    });
});

// close 
$(document).click(function (e) {
    if ($(e.target).closest('.catalog-filter__wrp').length) {
        return;
    }
    $('.float-send-filter').removeClass('active');
});



