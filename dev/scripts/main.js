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

    // jQuery ajax form
    var $form = $('#sendMessage');
    var $formMeta = $('.formMeta');
    var $success = $('.success', $formMeta);
    var $fail = $('.fail', $formMeta);

    $form.validate({
        submitHandler : function(){
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: $form.serialize()
            })
            .success(function() {
                $form.fadeOut(function(){
                    $success.fadeIn();
                })
            })
            .fail(function() {
                $form.fadeOut(function(){
                    $fail.fadeIn();
                })
            });

            return false;
        }
    })


})(jQuery);