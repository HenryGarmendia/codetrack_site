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

  // PARALLAX HERO BACKGROUND PICTURES
  let $headerMain = Math.round($(".header-main").height());

  $(window).scroll(function(){
    let winScroll = $(this).scrollTop();

    if(winScroll <= $headerMain){
      $(".header-main__hero-wrapper--hero-bkg").css({
        "transform": "translateY(" + winScroll / 2 + "px)"
      });

      $(".header-main__hero-wrapper--scene").css({
        "transform": "translateY(-" + (winScroll * 0.005) + "px)"
      });
    }

    // PORTFOLIO GALLERY
    let featureSection = $(".feature-section");
    
    if(winScroll > featureSection.offset().top) {
      $(".portfolio-section figure").each(function(i){
        setTimeout(function(){
          $(".portfolio-section figure").eq(i).addClass('fade-in');
        }, 150 * (i+1));
      });
    } // winScroll > featureSection.offset().top
  }); // $(window).scroll

  // SLIDER SHOWCASE
  $('.slider-section__box').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    infinite: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    slidesToShow: 3
    // slidesToScroll: 3
  });

}); // document.ready
