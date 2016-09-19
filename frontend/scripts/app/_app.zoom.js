var app = app || {};

(function(body){
    "use strict";

    app.zoom = {

        init: function() {
            var $image = null, src = '';

            $('.j-preview').on('click', function(e) {
                e.preventDefault();

                src = $.trim($(this).attr('href'));

                if (src !== '' && !$(this).hasClass('_current')) {
                    $image = $(this).closest('.j-zoom').find('.j-zoom-image');
                    
                    $image.html([
                        '<a href="', src ,'" class="product-item__preview__zoom__image" itemprop="image">',
                            '<img src="', src ,'" itemprop="contentUrl" alt="image name">',
                        '</a>'
                    ].join(''));

                    $('.j-preview').removeClass('_current');

                    $(this).addClass('_current');
                }

                return false;
            });
        }

    };

})(document.body);