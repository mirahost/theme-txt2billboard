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
    $('select').customSelect()

})(jQuery);