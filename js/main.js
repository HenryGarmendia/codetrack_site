$(document).ready(function() {
  "use strict";

  // STICKY HEADER
  let $header = $('header'),
      $headerHeight = Math.round($header.height() + 86),
      $sticky = $header.before($header.clone().addClass('header-main__sticky')),
      $stickyClass = document.querySelector('.header-main__sticky');

  function stickyNav() {
    if(window.scrollY > $headerHeight) {
      $($stickyClass).css("transform", "translateY(0)");
    } else {
      $($stickyClass).css({"transform": "translateY(-200%)"});
    }
  }; // stickyNav
  window.addEventListener('scroll', stickyNav);

  // PARALLAX BACKGROUND PICTURES
  let $headerMain = Math.round($(".header-main").height());

  $(window).scroll(function(){
    let winScroll = $(this).scrollTop();

    if(winScroll <= $headerMain){
      $(".header-main__hero-wrapper--hero-bkg").css({
        // "transform": "translateY(" + winScroll / 2 + "px)"
      });

      $(".header-main__hero-wrapper--hero-front").css({
        "transform": "translateY(" + winScroll / 2 + "px)"
      });
    }

  }); // $(window).scroll

}); // document.ready
