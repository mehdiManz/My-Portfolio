$(document).ready(function() {
  // Smooth scrolling animation for nav links
  $('a.nav-link[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      smoothScroll(target);
    }
  });

  // Smooth scrolling animation for #my-name link
  $('#my-name > div > div > div > a').on('click', function(event) {
    event.preventDefault();
    var target = $('#what-i-do');
    if (target.length) {
      smoothScroll(target);
    }
  });

  // Smooth background color transition
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    // Set navbar background color to black for every section
    $('nav').css('background-color', 'black');

    // Set navbar background color to transparent when scroll position is at the top
    if (scrollPos === 0) {
      $('nav').css('background-color', 'transparent');
    }
  });

  // Apply CSS transitions for smoother background color change
  $('nav').css('transition', 'background-color 0.3s ease-in-out');

  // Function to perform smooth scrolling
  function smoothScroll(target) {
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 800); // Adjust the duration (in milliseconds) to set the scrolling speed
  }
});




