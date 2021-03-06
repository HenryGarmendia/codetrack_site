$(document).ready(function() {
  "use strict";

  // STICKY HEADER
  let $header = $('header'),
      $headerHeight = Math.round($header.height() + 86),
      $sticky = $header.before($header.clone().addClass('header-main__sticky')),
      $stickyClass = document.querySelector('.header-main__sticky');

  function stickyNav() {
    if(window.scrollY > $headerHeight) {
      $($stickyClass).css({
        "transform": "translateY(0)", 
        "background-color": "rgba(0,0,0, .85)",
        "transition": "all .4s"
      });
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
    dots: true,
    infinite: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    slidesToShow: 3, 

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }); // $('.slider-section__box')

  // SMOOTH SCROLL
  $('.header-main__menu li a[href^="#"]').on('click', function(e) { 
    e.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top -5
      }, 1000);
    } // target.length
   });  // $('.header-main__menu')

  // RESPONSIVE MENU
  let body        = $('body'),
      menuTrigger = $('.header-main__trigger-js'),
      mainOverlay = $('.main-overlay__js');
      
  menuTrigger.on('click', function (){
    body.addClass('menu-is-active');
  });
  
  mainOverlay.on('click', function (){
    body.removeClass('menu-is-active');
  });
  
  $('.header-main__menu li a').on('click', function (){
    body.removeClass('menu-is-active');
  });
}); // document.ready
