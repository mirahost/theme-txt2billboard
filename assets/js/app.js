WebFontConfig = {
    google: { families: [ 'Roboto:400,300,500:latin', 'Lato::latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
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