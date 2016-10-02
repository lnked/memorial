var app = app || {};

(function(body){
    "use strict";

    app = {
        
        initPopup: function()
        {
            $.popup.init('.j-open-popup', {
                cssPosition: false,
                wrapper: '.layout-wrapper'
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
                if ($(window).width() > 782) {
                    var $this = $(this);
                    if ($this.find('.submenu').length && !$this.hasClass('is-active')) {
                        $('.navigation__item.is-active').removeClass('is-active');
                        $this.addClass('is-active');
                    }
                }
                else {
                    console.log("1");
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