import $ from 'jquery';

$(document).ready(function(){
    /*left menu*/


    function leftMenu() {

        this.cont = $('.mobile-menu');

        this.container = $('.left-menu-list');
        this.subpanel = $('.sub-panel');
        this.subpanelList = $('.mobile-menu__list');
        this.openMenuSelector = $('.left-menu-buttons');
        this.headerSelector = $('.header-top')

        /* methods */

        this.onOpenMain = function (elem) {
            elem.parent().toggleClass('open')
            this.headerSelector.toggleClass('open');
        }

        this.createPanel = function(){
            
            var countPane = $('.mobile-menu__pane').length + 1;
            var copyPane = $('.mobile-menu__pane').last().clone()
                .addClass('clone')
                .attr({
                    'data-sub': countPane,
                    'data-rol': 'subcat'
                })
                .css({
                    'z-index': countPane
                });
            this.cont.append(copyPane);

            return countPane;
        }

        this.onOpenSub = function (elem) {

            if (elem.children('a').attr('href') == '#' || elem.children('a').attr('href') === '') {
                var panelNumber = this.createPanel();
                var list = elem.find('.sub-cat').html();


                
                $('[data-sub="'+panelNumber+'"]').find('.mobile-menu__list ul').empty();
                $('[data-sub="'+panelNumber+'"]').find('.mobile-menu__list ul').html(list);
            } 
        }

        this.onCloseSub = function (elem) {

            let pane = elem.parent()

            if(pane.data('rol') === 'catalog'){
                pane.hide()
                $('.mobile-menu__main').show()
            }else{
                pane.remove();
            }
        }

    }

    //init main
    var leftMenu = new leftMenu();


    $(document).on('click', '[data-rol=open-catalog]', function () {
        $('[data-rol=catalog]').show()
        $('.mobile-menu__main').hide()
    })

    /* left-menu sub */
    $(document).on('click', '.mobile-menu__list li', function (e) {
        leftMenu.onOpenSub($(this))
    })


    $(document).on('click', '.mobile-menu__back', function (event) {
        leftMenu.onCloseSub($(this));
    })
    $(document).on('click', '.mobile__overlay', function (event) {
        $('.mobile, .nav__hamburger').removeClass('open')
    })
})