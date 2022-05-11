$(function () {
  $(".btn").click(function () {
    $(".btn").css("background", "white").css("color", "#ffafaf");
    $(this).css("background", "#ffafaf").css("color", "white");

    if ($(this).attr("class") == "monBestBtn btn") {
      $(".monthBs > ul").css("display", "inline-block");
      $(".weekBs > ul").css("display", "none");
      $(".steadaySell > ul").css("display", "none");
      console.log(1);
    } else if ($(this).attr("class") == "weekBestBtn btn") {
      $(".monthBs > ul").css("display", "none");
      $(".weekBs > ul").css("display", "inline-block");
      $(".steadaySell > ul").css("display", "none");
      console.log(2);
    } else if ($(this).attr("class") == "steadybtn btn") {
      $(".monthBs > ul").css("display", "none");
      $(".weekBs > ul").css("display", "none");
      $(".steadaySell > ul").css("display", "inline-block");
      console.log(3);
    }
  });

  $(window).scroll(function () {
    var st = $(this).scrollTop() + 1000;

    var sect1 = $(".sub_banner").offset().top;

    var sech1 = sect1 + $(".sub_banner").height();

    if (st >= sech1) {
      $(".zeroBook").animate({ left: "565px" }, 2500);
      $(".sub_banner > p > a").animate({ left: "445px" }, 2500);
      $(".firstBook").animate({ opacity: "1" }, 5000);
      $(".secondBook").animate({ opacity: "1" }, 5000);
      $(".thirdBook").animate({ opacity: "1" }, 5000);
    }
  });
  // 베스트셀러 탭 메뉴
  $(".bs_tab_menu li").click(function () {
    var index = $(this).index();
    $(".bs_tab_menu li").removeClass("on");
    $(this).addClass("on");
    $(".bs_tab").removeClass("on");
    $(".bs_tab").eq(index).addClass("on");
    return false;
  });

});

