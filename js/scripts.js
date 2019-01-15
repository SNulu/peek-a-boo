$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
    $("#walrus-pic").fadeToggle("slow");

  });
});
