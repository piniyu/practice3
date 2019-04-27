$(document).ready(function(){

    //nav-bar捲動改變
    $(window).scroll(function() {
        var scrollt = $(window).scrollTop();          

        if(scrollt > 48) {
            $("body").addClass("fixed");
        }else if(scrollt <= 48) {
            $("body").removeClass('fixed');
        };
    });

});
