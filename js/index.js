$(function () {

    // 메인페이지 스크립트-------------------------------

    // 메인 슬라이더-----------------------------

    var sliderLength = $(".ms_content").length;
    var isAnimated = false;
    var slideTime = 1000;

    $(".btn_main_right").click(function () {
        if (!isAnimated) {
            isAnimated = true;
            nextSlide();
        }
    });

    $(".btn_main_left").click(function () {
        if (!isAnimated) {
            isAnimated = true;
            prevSlide();
        }
    });

    function prevSlide() {
        var index = $(".ms_content.on").index()-1;
        if (index < 0) index = sliderLength-1;
        $(".ms_content.on").animate({left: "100%"}, slideTime, function () {
            $(this).removeClass("on");
        });
        $(".ms_content").eq(index).css({left: "-100%"}).animate({
            left: 0
        }, slideTime, function () {
            $(this).addClass("on");
            isAnimated = false;
        });
        backSlide(index);
    }

    function nextSlide() {
        var index = $(".ms_content.on").index()+1;
        if (index > sliderLength-1) index = 0;
        $(".ms_content.on").animate({left: "-100%"}, slideTime, function () {
            $(this).removeClass("on");
        });
        $(".ms_content").eq(index).css({left: "100%"}).animate({
            left: 0
        }, slideTime, function () {
            $(this).addClass("on");
            isAnimated = false;
        });
        backSlide(index);
    }

    function backSlide(index) {
        $(".main_slider_back li.on").animate({opacity: 0}, slideTime, function () {
            $(this).removeClass("on");
        })
        $(".main_slider_back li").eq(index).animate({opacity: 1}, slideTime, function () {
            $(this).addClass("on");
        });
    }

    // 자동 슬라이드
    setInterval(function () {
        $(".btn_main_right").trigger("click");
    }, 5000);


    // 베스트셀러 탭 메뉴
    $(".bs_tab_menu li").click(function () {
        var index = $(this).index();
        $(".bs_tab_menu li").removeClass("on");
        $(this).addClass("on");
        $(".bs_tab").removeClass("on");
        $(".bs_tab").eq(index).addClass("on");
        return false;
    });

    // 스크롤 애니메이션
    var windowHeight = $(window).height();
    $(window).resize(function () {
        windowHeight = $(window).height();
    })

    $(window).scroll(function () {
        if ($(this).scrollTop()+windowHeight > $(".bs_content1").offset().top+200) {
            $(".bs_list_line").animate({
                height: "430px"
            }, 500, function () {
                $(".bs_list_item").animate({
                    width: "100%", padding: 30
                }, 1000);
            });
        }
        if ($(this).scrollTop()+windowHeight > $(".sub_banner1").offset().top+300) {
            $(".sub_banner1").addClass("on");
            $(".sb1_box1, .sb1_box4, .sb1_box2, .sb1_box5").animate({
                height: 285
            }, function () {
                $(".sb1_line.line1").animate({width: 226}, 500);
                $(".sb1_line.line2").delay(500).animate({height: 114}, 500);
                $(".sb1_line.line3").animate({width: 110}, 500);
                $(".sb1_line.line4").delay(500).animate({height: 133}, 500);
                $(".sb1_box3_contxt").animate({
                    height: 92, opacity: 1
                })
            });
        }
    });

    // 버튼 애니메이션
    var wid = 0;
    setInterval(function () {
        $(".btn_arrow_sub").css({
            right: 32+Math.cos(wid*0.03)*10
        });
        wid++;
    }, 1);
    
    // 서브 배너 슬라이드
    function slideBanner() {
        $(".sb1_b3_img li").first().css("z-index", 2).fadeOut(1000, function () {
            $(this).css("z-index", 0);
        });
        $(".sb1_b3_img li").eq(1).css("z-index", 1).fadeIn(1000, function () {
            $(this).css("z-index", 2);
        });
        $(".sb1_b3_img").append($(".sb1_b3_img li").first());
    }
    setInterval(slideBanner, 3000);


});
