
$(function () {

    // 검색창 힌트 사라지고 나타나게
    $(".search_input").focusin(function () {
        $(this).attr("placeholder", "");
    });
    $(".search_input").focusout(function () {
        $(this).attr("placeholder", "Search..");
    });

    // GNB 색상바꾸기
    $(".gnb > li").click(function () {
        $(".gnb > li").removeClass("on");
        $(this).addClass("on");
    });
    
    // GNB별 서브메뉴 나타나게
    $(".gnb > li").hover(function () {
        $(this).children(".gnb_sub").stop().slideDown(500);
    }, function () {
        $(this).children(".gnb_sub").stop().slideUp(500);
    });
    $(".gnb > li:first-child").hover(function () {
        $(".categories").stop().slideDown(500);
    }, function () {
        $(".categories").stop().slideUp(500);
    });
    
    // GNB 고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("#header_wrap").offset().top+$("#header_wrap").height()) {
            $(".gnb_wrap").addClass("on");
        } else $(".gnb_wrap").removeClass("on");
    })

    // 로그인, 회원가입 팝업
    $(function () {
        $(".top_menu li").eq(0).click(function(){
            $(".top_panel").find('.back').eq(0).fadeIn();
            $('.login_id input:first').focus();
        });
        $('.top_menu li').eq(1).click(function(){
            $(".top_panel").find('.back').eq(1).fadeIn();
            $('.email_s input:first').focus();
        });
        $(".pause").click(function(){
            $(".back").fadeOut();
        });
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if(st > 0){
                $(".back").slideUp();
            }
        });
        $('.login_wrap input').each(function(){
           var name1 = $(this).attr('placeholder');
            $(this).blur(function(){
                $(this).attr('placeholder',name1);
            });
        });
        $('.join_wrap input').each(function(){
            var name1 = $(this).attr('placeholder');
             $(this).blur(function(){
                 $(this).attr('placeholder',name1);
             });
         });
        $('.top_panel input').focus(function(){
            $(this).attr('placeholder','');
        });
    });
});
