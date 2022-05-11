$(function(){
    //리스트 나오기
    $('.banner1_icon>a').click(function(e){
        e.preventDefault();
        $('.list1').slideToggle(500);
        $(".list1").siblings("div").hide();
    });
       $('.banner2_icon>a').click(function(e){
        e.preventDefault();
        $('.list2').slideToggle(500);
        $(".list2").siblings("div").hide();
    });
      $('.banner3_icon>a').click(function(e){
        e.preventDefault();
        $('.list3').slideToggle(500);
        $(".list3").siblings("div").hide();
    });
   
    //탭 나오기
    var target =$('.tab_content'),
        tab_menu = $('.bs_tab_menu li');
    tab_menu.click(function(e){
        e.preventDefault();
        tab_menu.removeClass("on");
        $(this).addClass("on");
        var num = $(this).index();
        target.removeClass('on');
        target.eq(num).addClass('on');
    });

});
