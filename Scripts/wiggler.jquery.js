(function ($) {
    $.fn.extend({
        //plugin name - animatemenu
        wiggler: function (options) {

            //Settings list and the default values
            var defaults = {};

            var options = $.extend(defaults, options);

            return this.each(function () {
                //Attach mouseover and mouseout event to the LI  
                $(this).mouseover(function () {
                    //$(this).animate({ paddingLeft: o.animatePadding }, 300);
                    $(this).addClass("animation-time shake");
                }).mouseout(function () {
                    //$(this).animate({ paddingLeft: o.defaultPadding }, 300);
                    $(this).removeClass("animation-time shake");
                });

            });
        }
    });
})(jQuery);