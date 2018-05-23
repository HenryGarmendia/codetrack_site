$(document).ready(function() {
  "use strict";

  let $header = $('header'),
      $headerHeight = Math.round($header.height() + 286),
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

}); // document.ready
