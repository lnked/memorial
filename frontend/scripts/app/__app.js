var app = app || {};

(function(body){
    "use strict";

    app = {
        
        init: function() {
            this.map.init();
            this.zoom.init();
            this.gallery.init();
        }

    };

})(document.body);