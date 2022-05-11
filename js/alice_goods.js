$(function () {

    var isAnimate = false;

    setInterval(function () {
        $(".btn_slider.right").trigger("click");
    }, 3000);

    // 슬라이더---------------------------
    $(".btn_slider.left").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            $(".bg_slider_inner").prepend($(".bg_slider_inner li").last());
            $(".bg_slider_inner").css("left", "-100%");
            $(".bg_slider_inner").animate({
                left: 0
            }, 1000, function () {
                isAnimate = false;
            });
        }
    });
    
    $(".btn_slider.right").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            $(".bg_slider_inner").animate({
                left: "-100%"
            }, 1000, function () {
                $(".bg_slider_inner").append($(".bg_slider_inner li").first());
                $(".bg_slider_inner").css("left", 0);
                isAnimate = false;
            });
        }
    });

    // 탭메뉴--------------------------
    $(".goods_tab_menu li").click(function () {
        var target = $(this).attr("id");
        $(".goods_list").removeClass("on");
        $("."+target).addClass("on");
        $(".goods_tab_menu li").removeClass("on");
        $(this).addClass("on");
    });

    // 스크롤 이벤트--------------------
    $(window).scroll(function () {
        if ($(window).scrollTop()+$(window).height() > $(".banner1").offset().top+200) {
            $(".banner_1_back2").animate({height: 300}, 1000);
            $(".banner_1_contxt").animate({left: "20%", opacity: 1}, 1000);
            $(".banner_1_goods1").animate({right: "20%", opacity: 1}, 1000);
            $(".banner_1_goods2").animate({right: "27%", opacity: 1}, 1000);
        }
    });

    // 슬라이드 배너 화살표버튼 위치조정
    $(window).resize(function () {
    if ($(window).width() <= $(".bg_slider").width()) {
            $(".btn_slider_wrap").addClass("on");
        } else if ($(window).width() > $(".bg_slider").width()) {
            $(".btn_slider_wrap").removeClass("on");
        }
        console.log($(window).width());
    });

});
