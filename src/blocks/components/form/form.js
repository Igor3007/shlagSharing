import $ from 'jquery';

$(document).ready(function () {

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Латиница или цифры
    function validatePasswordEnNum(pass){
       var regexp = '^[a-zA-Z0-9]+$';
       return pass.match(regexp);
    }

    //мининум 1 цифра
    function validatePasswordOneNum(pass){
       var regexp = '/(\d{4})/';
       return pass.match(regexp);
    }

    //минимум 1 заглавная
    function validatePasswordCap(pass){
        var regexp = '^[a-zA-Z0-9]+$';
        return pass.match(regexp);
     }
     

    $(document).on('keyup', 'input[type=text], input[type=email], input[type=password], textarea', function(){
        
        let value = $(this).val();
        let elem = $(this);

        

        switch($(this).attr('type')){

            case 'email': 

                if(!validateEmail(value)){
                    elem.attr('area-valid', 'false')
                    //elem.parent().find('.tooltip').text('Не корректный Email')
                }else{
                    elem.attr('area-valid', 'true')
                }

            break;

            case 'password': 

            const rulesArray = {
                '0': validatePasswordEnNum(value),
                '1': validatePasswordOneNum(value),
                '2': validatePasswordCap(value)
            }

            const rulesList = $(this).parents('form').find('.valid-rules li');

            rulesList.each(function(index, elem){

                // console.log(index)
                // console.log(Array.isArray(rulesArray[index]))

                if(Array.isArray(rulesArray[index])){
                    $(this).addClass('active')
                }else{
                    $(this).removeClass('active') 
                }
            })

            // const rulesList = $($this).parents('form').find('.valid-rules li');

            // if(validatePasswordEnNum(value)) {
            //     rulesList.eq(0).addClass('active')
            // }

            if(value.length < 6){
                elem.attr('area-valid', 'false')
            }else{
                elem.attr('area-valid', 'true')
            }

            break;
            

            case 'text': 

                switch (elem.data('valid-type')){
                    case 'min8':
                        if(value.length < 8){
                            elem.attr('area-valid', 'false')
                        }else{
                            elem.attr('area-valid', 'true')
                        }
                    break;

                    default: 

                        if(value.length < 0){
                            elem.attr('area-valid', 'false')
                        }else{
                            elem.attr('area-valid', 'true')
                        }
                }

            break;

            
            default: 
                if(value.length < 0){
                    elem.attr('area-valid', 'false')
                }else{
                    elem.attr('area-valid', 'true')
                }
        }

        if(!value){
            elem.removeAttr('area-valid')
        }

    })

   
    
        
    $('.input-material input, .input-primary input').each(function(){
        if($(this).val() != ''){
            $(this).attr('area-valid', '')
        }
    })


    //upload files
     function sendFiles(files, callback) {
        for (var i = 0; i < files.length; i++) {
            var file = files.item(i);
            if (file.size > 2200000) {
                alert('Не больше 2 мб')
                return false;
            }
            callback(file);
        }
    }


    /* Прикрепить файл резюме */
    $(document).on('change', '[for=attach-file] > input', function () {
        let files = this.files;
        let elem = $(this);

        sendFiles(files, function (data) {
            elem.parents('.form__subitem')
                .find('.upload-files')
                .append('<li>'+data.name+'</li>');
        
        });

    });

    //showpass
    $(document).on('mousedown', '.tooltip-showpass', function(event){
        $(this).parent().children('input').attr('type', 'text')
    })

    $(document).on('mouseup', function(event){
        $('.tooltip-showpass').parent().children('input').attr('type', 'password')
        
    })
});