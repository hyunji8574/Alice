$(function(){
    //tap
    $(".bs_tab_menu li").click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        $(".bs_tab_menu li").removeClass("on");
        $(this).addClass("on");
        $(".bs_tab").removeClass("on");
        $(".bs_tab").eq(index).addClass("on");
    });
    //banner
    var now_img, next_img;
        function fadeInOut(){
            now_img = $(".content_right>div").eq(0);
            next_img =$(".content_right>div").eq(1);
            $('.content_right_banner').removeClass('on');
            next_img.addClass('on');
            next_img.css("opacity","0").animate({opacity : '1'},2500,
                function(){
                    $(".content_right").append(now_img);
                    $(now_img).removeClass("on");
                });
        }
    var mouseHover = setInterval(fadeInOut,3000);
    $(".content_right_banner").hover(
        function(){
            clearInterval(mouseHover);
        },
        function(){
            mouseHover = setInterval(fadeInOut,3000);
        }
    );
});