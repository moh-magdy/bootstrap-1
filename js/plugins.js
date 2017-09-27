$(document).ready(function(){
  $('.carousel').carousel({
    interval:5000
  });

  // show color option on click
  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  });

});
