$(document).ready(function(){
  $('.carousel').carousel({
    interval:5000
  });

  // show color option on click
  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  });

  // change theme color on click
  var colorLi = $(".color-option ul li");
  colorLi
    .eq(0).css("background-color","#e41b17").end()
    .eq(1).css("background-color","#337ab7").end()
    .eq(2).css("background-color","#5cb85c").end()
    .eq(3).css("background-color","#5bc0de").end()
    .eq(4).css("background-color","#ba56bb");

  colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    //console.log($(this).attr("data-value"));
  });
});
