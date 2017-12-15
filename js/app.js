$(function(){
    const $myNav = $('nav');
    const $myMenu = $('.menu');
    const $myMenuPosition = $myMenu.position().top;

    $(window).on("scroll", function(){
        var $myScrollTop = $(this).scrollTop()
        if($myScrollTop> $myMenuPosition){
            $myMenu.addClass("sticky");
        } else {
            $myMenu.removeClass("sticky");
        }
    })

    $(window).on("resize", function(){
        if($myMenu.is(".sticky")){
            $myNav.position().top = $(this).scrollTop()
        } 
    })
})