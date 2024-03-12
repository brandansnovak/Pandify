$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 30){
            $('header').addClass('fixed-header');
        }
        else{
            $('header').removeClass('fixed-header');
        }
    });
});