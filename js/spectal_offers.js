$(function () {
    
    var autoslide = function slideList() {
        $("#right").trigger("click");
    }

    var isAnimate = false;
    $("#right").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            $(".list_roll").animate({
                left: "-=250"
            }, 500, function () {
                $(".list_roll").append($(".list_roll li").first());
                $(".list_roll").css("left", "+=250");    
                isAnimate = false;
            });              
        }
        return false;
    });

    $("#left").click(function () {
        if (!isAnimate) {
            isAnimate = true;
            $(".list_roll").prepend($(".list_roll li").last());
            $(".list_roll").css("left", "-=250");
            $(".list_roll").animate({
                left: "+=250"
            }, 500, function () {
                isAnimate = false;
            });
        }
        return false;
    });

    setInterval (autoslide, 1500);

});