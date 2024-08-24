(function ($) {
  "use strict";

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  if ($(window).width() < 1024) {
    $(".navbar-menu .has-dropdown").on("click", function (e) {
      $(this).children(".navbar-dropdown").toggle();
    });
  }

  $(".videoplay").modalVideo();
  $(".portfolio-single-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".testimonial-wrap").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".gallery-wrap").each(function () {
    $(this)
      .find(".gallery-popup")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });
  $(document).ready(function() {
    $('.gallery-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });
  });
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
      // styles: style_array_here
    };
    map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  }

  var google_map_canvas = $("#map-canvas");

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, "load", initialize);
  }

  // Counter

  $(".counter-stat").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);
document.addEventListener('DOMContentLoaded', function() {
  const introItems = document.querySelectorAll('.intro-item');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }

  function handleScroll() {
    introItems.forEach(item => {
      if (isElementInViewport(item)) {
        if (!item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      } else {
        item.classList.remove('visible'); // Remove class when out of view to reset the animation
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check to handle items already in view
});
AOS.init({
  duration: 800, // duration of the animation
  once: true,    // whether animation should happen only once
});
document.addEventListener('DOMContentLoaded', function() {
  // Select all project items
  const projectItems = document.querySelectorAll('.project-item');

  // Intersection Observer callback function
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2 // Adjust this value as needed
  });

  // Observe each project item
  projectItems.forEach(item => {
    item.classList.add('animate');
    observer.observe(item);
  });
});
