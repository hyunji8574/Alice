$(function(){
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var banner1 = $('.banner1').offset().top-450;
        var banner2 = $('.banner2').offset().top-400;
        var banner3 = $('.banner3').offset().top-400;
        var banner1Height= banner1 +$('.banner1').height();
        var banner2Height= banner2 +$('.banner2').height();
        var banner3Height= banner3 +$('.banner3').height();
       
        if(st>=banner1 && st<banner1Height){
            $('.banner1_icon>img').eq(0).animate({opacity:1,"left":"608px"},600);
            $('.banner1_icon>img').eq(1).animate({opacity:1,"left":"709px"},600);
            $('.banner1_icon>img').eq(2).animate({opacity:1,"left":"725px"});
            $('.banner1_icon>img').eq(3).animate({opacity:1,"right":"90px"},600);
            $('.banner_text').animate({opacity:1,"top":"96px"},700);
            $('.banner1_icon>a').animate({opacity:1,"bottom":"40px"},600);
            $('.banner1').animate({'opacity':1});
        };

        if(st>=banner2 && st<banner2Height){
            $('.banner2_icon>img').eq(0).animate({opacity:1,"right":"45px"},600);
            $('.banner2_icon>img').eq(1).animate({opacity:1,"left":"660px"},600);
            $('.banner2_icon>img').eq(2).animate({opacity:1,"left":"600px"});
            $('.banner2_icon>img').eq(3).animate({opacity:1,"right":"45px"},600);
            $('.banner2_icon>img').eq(4).animate({opacity:1,"right":"85px"},600);
            $('.banner_text1').animate({opacity:1,"top":"96px"},700);
            $('.banner2_icon>a').animate({opacity:1,"bottom":"40px"},600);
            $('.banner2').animate({'opacity':1});
        };

        if(st>=banner3 && st<banner3Height){
            $('.banner3_icon>img').eq(0).animate({opacity:1,"left":"660px"},600);
            $('.banner3_icon>img').eq(1).animate({opacity:1,"right":"85px"},600);
            $('.banner_text2').animate({opacity:1,"top":"96px"},700);
            $('.banner3_icon>a').animate({opacity:1,"bottom":"40px"},600);
            $('.banner3').animate({'opacity':1}); 
        };

    });
});