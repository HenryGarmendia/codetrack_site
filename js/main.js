$(document).ready(function() {
  "use strict";

  let $header = $('header');

  let $sticky = $header.before($header.clone().addClass('sticky'));

  $sticky.css({
    backgroundColor: 'blue'
  });

}); // document.ready
