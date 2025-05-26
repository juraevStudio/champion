$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".macbook").css({
        "transform" : "translate(0px, " + st/25 + "px"
    });
    $(".banne__logo").css({
        "transform" : "translate(" + -st/10 + "px, " + "0px"
    });
    $(".banner__phone").css({
        "transform" : "translate(" + -st/20 + "px, " + "0px"
    });
});