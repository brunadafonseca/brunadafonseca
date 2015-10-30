$(function () {
  $("#my-menu a").on("click", function(event) {
    event.preventDefault();
    $("#my-menu li").removeClass("active");
    $(this).parent().addClass("active");
    $("button.navbar-toggle:visible").click();
    var container = $(this).data("container");
    var top = $(container).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
  });
  
  $(".links a, .navbar-brand").on("click", function(event) {
    event.preventDefault();
    var container = $(this).data("container");
    var top = $(container).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
  });
    
});