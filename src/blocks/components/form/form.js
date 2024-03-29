import $ from 'jquery';

$(document).ready(function () {

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function passValidateRules (pass)
    {
        this.value = pass;

        this.validatePasswordEnNum = function (pass) {
            let regexp = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+)).*';
            return (this.value.match(regexp) ? true : false);
        }

        this.validatePasswordRus = function (pass) {
            let regexp = '(?=.*[А-яЁё])';
            return (this.value.match(regexp) ? true : false);
        }
 
        this.validatePasswordOneNum = function (pass) {
            let regexp = '(?=.*[0-9])';
            return (this.value.match(regexp) ? true : false);
        }

        this.validatePasswordCap = function (pass) {
            // debugger
            let regexp = '((?=.*\d)|(?=.*\W+)).*';
            return (this.value.match(regexp) ? true : false);
        }
    }
    




    $(document).on('keyup', 'input[type=text], input[type=email], input[type=password], textarea', function () {

        let value = $(this).val();
        let elem = $(this);



        switch ($(this).attr('type')) {

            case 'email':

                if (!validateEmail(value)) {
                    elem.attr('area-valid', 'false')
                    //elem.parent().find('.tooltip').text('Не корректный Email')
                } else {
                    elem.attr('area-valid', 'true')
                    elem.parents('.input-primary').removeClass('empty-field')
                }

                break;

            
            case 'password':

                const validState = new passValidateRules(value);
                const rulesList = $(this).parents('form').find('.valid-rules li');

                if ($('ul').is('.valid-rules')) {
                    if (validState.validatePasswordEnNum()) {
                        rulesList.eq(0).addClass('active')
                    } else {
                        rulesList.eq(0).removeClass('active')
                    }

                    if (validState.validatePasswordRus()) {
                        rulesList.eq(0).removeClass('active')
                    } 

                    if (validState.validatePasswordOneNum()) {
                        rulesList.eq(1).addClass('active')
                    } else {
                        rulesList.eq(1).removeClass('active')
                    }

                    if (validState.validatePasswordCap()) {
                        rulesList.eq(2).addClass('active')
                    } else {
                        rulesList.eq(2).removeClass('active')
                    }
                }

                break;


            case 'text':

                if ($('ul').is('.valid-rules')) {

                    const validState = new passValidateRules(value);
                    const rulesList = $(this).parents('form').find('.valid-rules li');

                    if (validState.validatePasswordEnNum()) {
                        rulesList.eq(0).addClass('active')
                    } else {
                        rulesList.eq(0).removeClass('active')
                    }

                    if (validState.validatePasswordRus()) {
                        rulesList.eq(0).removeClass('active')
                    } 

                    if (validState.validatePasswordOneNum()) {
                        rulesList.eq(1).addClass('active')
                    } else {
                        rulesList.eq(1).removeClass('active')
                    }

                    if (validState.validatePasswordCap()) {
                        rulesList.eq(2).addClass('active')
                    } else {
                        rulesList.eq(2).removeClass('active')
                    }
                }

                switch (elem.data('valid-type')) {
                    case 'min8':
                        if (value.length < 8) {
                            elem.attr('area-valid', 'false')
                        } else {
                            elem.attr('area-valid', 'true')
                            elem.parents('.input-primary').removeClass('empty-field')
                        }
                        break;

                    case 'number':
                        elem.val(value.replace (/\D/, ''));
                        break;

                    default:

                        if (value.length < 0) {
                            elem.attr('area-valid', 'false')
                        } else {
                            elem.attr('area-valid', 'true')
                            elem.parents('.input-primary').removeClass('empty-field')
                        }
                }

                break;


            default:
                if (value.length < 0) {
                    elem.attr('area-valid', 'false')
                } else {
                    elem.attr('area-valid', 'true')
                }
        }

        if (!value) {
            elem.removeAttr('area-valid')
        }

    })




    $('.input-material input, .input-primary input').each(function () {
        if ($(this).val() != '') {
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
            elem.parents('.form__item')
                .find('.upload-files')
                .append('<li>' + data.name + '</li>');
        });
    });

    /* input-attach */
    $(document).on('change', '.input-attach input', function () {
        let files = this.files;
        let elem = $(this);

        sendFiles(files, function (data) {
            elem.parent()
                .find('.file-name')
                .text(data.name);

        });

    });

    /* input-photo */
    $(document).on('change', '#upload-photo', function () {
        let files = this.files;
        let elem = $(this);

        sendFiles(files, function (data) {

            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = function (e) {
                elem.parent()
                    .find('.upload-image')
                    .css({
                        'background-image': 'url(' + e.target.result + ')'
                    });
            }
        });

    });

    //showpass
    $(document).on('click', '.tooltip-showpass', function (event) {
        if ($(this).parent().children('input').attr('type') == 'text') {
            $(this).parent().children('input').attr('type', 'password')
        } else {
            $(this).parent().children('input').attr('type', 'text')
        }
    })

    // $(document).on('mouseup', function(event){
    //     $('.tooltip-showpass').parent().children('input').attr('type', 'password')

    // })
});