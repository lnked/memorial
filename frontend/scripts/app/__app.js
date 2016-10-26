var app = app || {};

(function(body){
    "use strict";

    app = {
        
        initPopup: function()
        {
            var $overlay = $('#overlay');

            $.popup.init('.js-open-popup', {
                cssPosition: false,
                wrapper: '.layout-wrapper'
            });

            $('body').on('click', '.j-open-popup', function(e){
                e.preventDefault();
                var popup = '', $popup = null, header = '';

                popup = $(this).attr('href');

                if (popup) {
                    popup = 'tmpl-' + popup.substr(1);
                }

                if ($(this).data('title')) {
                    header = $(this).data('title');
                }

                $popup = $(template(popup, { 'header': header }));

                $popup.addClass('temp');
                
                $popup.find('input[name="title_form"]').val(header);

                $popup.find('.popup__header__title').html(header);

                $('body').append($popup);

                $overlay.addClass('visible');

                setTimeout(function(){
                    $overlay.addClass('animate');
                    $.popup.show($popup);
                }, 10);

                return false;
            });
        },
        
        warning: function() {
            $('body').on('click', function(e){
                if ($('.j-warning-block._open').length) {
                    if (!$(e.target).closest('.j-warning-block').length && !$(e.target).hasClass('.j-warning-block')) {
                        $('.j-warning-block._open').removeClass('_open');
                    }
                }
            });

            $('body').on('click', '.j-warning-trigger', function(){
                $(this).closest('.j-warning-block').toggleClass('_open');
            });
        },

        navigation: function() {
            $('body').on('mouseenter', '.navigation__item', function(e){
                if ($(window).width() > 1120) {
                    var $this = $(this);
                    if ($this.find('.submenu').length && !$this.hasClass('is-active')) {
                        $('.navigation__item.is-active').removeClass('is-active');
                        $this.addClass('is-active');
                    }
                }
            });

            $('body').on('click', '.navigation__link', function(e){
                if ($(window).width() <= 1120) {
                    var $item = $(this).closest('.navigation__item');

                    if ($item.find('.submenu').length) {
                        e.preventDefault();

                        if (!$item.find('.submenu').find('.submenu__backuri').length) {
                            $item.find('.submenu').append('<div class="submenu__backuri">Назад</div>');
                        }

                        $item.find('.submenu').find('.submenu__backuri').on('click', function(){
                            e.preventDefault();
                            
                            $(this).closest('.is-open').removeClass("is-open");

                            return false;
                        });

                        $item.addClass("is-open");

                        return false;
                    }
                }
            });

            $('body').on('mouseleave', '.navigation__item', function(e){
                $('.navigation__item.is-active').removeClass('is-active');
            });
        },

        init: function() {
            this.navigation();
            this.initPopup();
            this.warning();
            this.map.init();
            this.tabs.init();
            this.slider.init();
            this.sandwich.init();
            this.gallery.init();
        }

    };

})(document.body);