var app = app || {};

(function(body){
    "use strict";

    app = {
        
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

        init: function() {
            this.warning();
            this.map.init();
            this.tabs.init();
            this.gallery.init();
        }

    };

})(document.body);