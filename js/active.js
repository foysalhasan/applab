$(document).ready(function () {


  // WOW JS
  new WOW().init();
  
  // ======================

  // ?MixItUp JS
  var containerEl = document.querySelector('.mix_container');
  var mixer = mixitup(containerEl, {
      selectors: {
          control: '[our-mixitup-control]'
      }
  });

    //======================
    $(".navbar-toggler").click(function(){
        $(".side_nav").addClass("active");
        $(".side_nav").css("transition", "all .3s linear .3s");
        $(".off_canvas").addClass("active");
        $(".off_canvas").css("transition", "all .3s linear");
    });

    $(".off_canvas").click(function(){
        $(".side_nav").removeClass("active");
        $(".side_nav").css("transition", "all .3s linear 0s");
        $(this).removeClass("active");
        $(this).css("transition", "all .3s linear .3s")

    });


    $("#nav_close").click(function(){
        $(".side_nav").removeClass("active");
        $(".side_nav").css("transition", "all .3s linear 0s");
        $(".off_canvas").removeClass("active");
        $(".off_canvas").css("transition", "all .3s linear .3s")
        $(".navbar-toggler").removeClass("active");

    });

    $(".sub_menu_link").click(function(){
      $(this).children(".sub_arrow").toggleClass("active");
    });

  // ======================

  $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayHoverPause:true,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });

    // =============================

    $(".go_top").click(function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          1500
        );
      });
    
      $(".go_top").hide();
    
      $(window).scroll(function () {
        var ourwindow = $(this).scrollTop();
        if (ourwindow < 500) {
          $(".go_top").fadeOut();
        } else {
          $(".go_top").fadeIn();
        }
      });    

    // =============================
  
    $(window).scroll(function(){
    var navFixed = $(window).scrollTop();
    if(navFixed > 200){
      $(".main_nav").removeClass("py-30").addClass("fixed-top bg-white nav-border animated fadeInDown faster py-15");
      $(".app_banner").addClass("mt-105");
    }else{
      $(".main_nav").removeClass("fixed-top bg-white nav-border animated fadeInDown faster py-15").addClass("py-30");
      $(".app_banner").removeClass("mt-105");
    }
  });

    //   ==================
    // ?Smooth Section for Section

   $('a.section-scroll[href*="#"]:not([href="#"])').on("click", function (
    event
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          750
        );
        return false;
      }
    }
  });

});

