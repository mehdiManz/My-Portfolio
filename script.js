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
      smoothScroll(target, 800, 'easeInOutQuart'); // Use the same duration and easing as other links
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
       // Remove box shadow when scroll position is at the top
       $('nav').css('box-shadow', 'none');
    } else {
      // Add box shadow for other scroll positions
      $('nav').css('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.08)');
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

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Compose email message
    var subject = "New Message from Contact Form";
    var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;

    // Compose mailto link
    var mailtoLink = "mailto:mehdimaanz@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    // Open email client
    window.location.href = mailtoLink;

    // Optionally, display a confirmation message
    alert("Thank you for your message. We will get back to you soon.");

    // Reset the form fields
    document.getElementById("contactForm").reset();
  });

  var whatIDoSection = document.getElementById("what-i-do");
  var textElements = document.querySelectorAll(".animated-text");

  function handleIntersection(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        textElements.forEach(function (textElement) {
          textElement.style.animation = "changeTextColor 1s 1s forwards";
        });
      } else {
        textElements.forEach(function (textElement) {
          textElement.style.animation = "none";
          textElement.style.color = "#ffffff";
        });
      }
    });
  }

  var intersectionObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  intersectionObserver.observe(whatIDoSection);

  // Select the navigation links
  var navLinks = document.querySelectorAll("body > nav > a, #navbarNav > ul > li:nth-child(2) > a, #navbarNav > ul > li:nth-child(3) > a, #navbarNav > ul > li:nth-child(4) > a, #navbarNav > ul > li:nth-child(5) > a");

  // Add event listeners for hover effect
  navLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      this.style.color = "#ff5500";
      this.style.transition = "color 0.3s ease";
      this.style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.color = "";
      this.style.transition = "";
      this.style.transform = "";
    });
  });

  // Store the scroll position in local storage when the page is unloaded
  $(window).on("beforeunload", function() {
    var scrollPos = $(window).scrollTop();
    localStorage.setItem("scrollPos", scrollPos);
  });

  // Retrieve and apply the stored scroll position on page load
  var storedScrollPos = localStorage.getItem("scrollPos");
  if (storedScrollPos === null || parseInt(storedScrollPos) === 0) {
    $('nav').css('background-color', 'transparent');
    $('nav').css('box-shadow', 'none');
  }
  else {
    $('html, body').scrollTop(parseInt(storedScrollPos));
  }
});
<<<<<<< HEAD



=======
>>>>>>> f6ce1872b1703049da997c3a354b4cc11e258db9
