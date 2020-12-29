
// $('.feedback__slider').slick();

$(document).ready(function () {

    $('.feedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
    });


    var $modal = $('.modal-container');
    var $button = $('.btn__go-top');

    $('.header__consult-btn').on('click', function () {
        $modal.fadeIn('slow');
    });

    $('.close_buttom').on('click', function () {
        $modal.fadeOut('slow');
    });
    
    $(window).scroll(function(){
       if (document.documentElement.scrollTop > 350 || document.body.scrollTop >350){
            $button.fadeIn(400);
        }else{
            $button.fadeOut(900);
        }
    });

    $button.on('click', function(){
        $(window).scrollTop(10);
    })

});      