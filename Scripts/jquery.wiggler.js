(function ($) {
    $.fn.extend({
        //plugin name - animatemenu
        wiggler: function (options) {
            var defaults = {};
            var options = $.extend(defaults, options);

            return this.each(function () {
                $(this).mouseover(function () {
                    //$(this).animate({ paddingLeft: o.animatePadding }, 300);
                    $(this).addClass("animation-time wiggle");
                    //$(this).css("right", "50px").css("left", "50px");
                }).mouseout(function () {
                    //$(this).animate({ paddingLeft: o.defaultPadding }, 300);
                    $(this).removeClass("animation-time wiggle");
                });

            });
        }
    });
})(jQuery);