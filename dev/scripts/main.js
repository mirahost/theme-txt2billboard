(function($){

    // customize all selects
    $('select').customSelect();

    var $mobileSidebar = $('.sideMeta');
    // mobile nav
    $('.js-nav-trigger').on('click', function(e){
        e.preventDefault();

        $mobileSidebar.toggleClass('active');
        var isActive = $mobileSidebar.hasClass('active');

        $mobileSidebar.animate({
            right : isActive ? 0 : '-50%'
        });

    });

})(jQuery);