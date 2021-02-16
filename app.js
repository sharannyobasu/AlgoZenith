$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
      $(".navig").css("background", "#0f0d63");
    } else {
      $(".navig").css("background", "none");
    }
  });
});
