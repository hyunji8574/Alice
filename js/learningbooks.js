$(function () {

    // 탭 메뉴
    $(".bs_tab_menu li").click(function () {
        var index = $(this).index();
        $(".bs_tab_menu li").removeClass("on");
        $(this).addClass("on");
        $(".bs_tab").removeClass("on");
        $(".bs_tab").eq(index).addClass("on");
        return false;
    });

});