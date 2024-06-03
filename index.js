$(document).ready(function () {
  function responsiveNav() {
    if ($(window).width() < 768) {
      $(".nav-list").hide();
      $("#open").show();
      $("#close").hide();
    } else {
      $(".nav-list").show();
      $("#open , #close").hide();
    }
  }

  responsiveNav();

  $(window).resize(function () {
    responsiveNav();
  });

  $("#open, #close").on("click", function () {
    $("#open, #close").toggle();
    $(".nav-list").slideToggle();
  });
});
