$(function(){
    var rolling = $('.new_content>ul');
    var rollingList =$('.new_content>ul>li');
    var width = $(rollingList).width()+40;
    var rollLength =$(rollingList).length;
    var leftMove =0;
    var max = width*rollLength;
    function move(){
        leftMove += width;
        $('.new_content').find('ul').stop().animate({"left":-leftMove},1200,function(){
            if(leftMove>=max){
                $(this).css('left',0);
                leftMove = 0;
            };
        });
    };
    $(rolling).append($(rollingList).clone());
    var rollPlay = setInterval(move,1600);
    $(rolling).mouseover(function(e){
        e.preventDefault();
        clearInterval(rollPlay);
    });
    $(rolling).mouseout(function(e){
        e.preventDefault();
        rollPlay = setInterval(move,1600);
    });
});




